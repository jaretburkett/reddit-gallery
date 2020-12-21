import { createBrowserHistory } from 'history';
import { IImageObj } from './interfaces';
import { createState } from '@hookstate/core';
import { objCopy, nextFrame, wait } from './utils';
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const imgUrl = (url: string) => {
    return url.replace(/&amp;/g, '&')
}

export class Store {
    // create a place to store our history so navigation works (back, forward)
    history = createBrowserHistory();

    constructor() {
        // set the current location based on url
        this.updateLocation(window.location.pathname);

        // set up a listener to handle url changes from "navigateTo"
        this.history.listen((update) => {
            this.updateLocation(update.location.pathname);
        });

    }

    // basic ui
    isLoading = createState(false);
    size = createState(400);
    loaderVisible: boolean = false;

    // reddit options
    redditSorting = createState<"new" | "hot">('new'); // new or hot
    redditType = createState<string | null>(null);
    redditAsset = createState<string | null>(null);
    last: string | null = null;

    // image processor
    imageObj = createState<IImageObj[]>([]);
    shownImgUrls: string[] = []; // keep track of shown to prevent duplicates

    // calling this with "/r/sub_reddit" or "/u/reddit_user" will navigate to that sub
    navigateTo = (pathName: string) => {
        let publicUrl = process.env.PUBLIC_URL || '';
        // remove trailing slash if it exists
        if(publicUrl.endsWith('/')){
            publicUrl = publicUrl.slice(0, -1);
        }
        this.history.push(publicUrl + pathName, {})
    }

    fetchNext = () => {
        // const { redditType, redditAsset, redditSorting, isLoading } = this;
        if (
            !this.isLoading.get() &&
            this.redditType.get() &&
            this.redditAsset.get()
        ) {
            this.isLoading.set(true);

            let url: string;
            if (this.redditType.get() === 'r') {
                url = `https://www.reddit.com/${this.redditType.get()}/${this.redditAsset.get()}/${this.redditSorting.get()}.json?limit=50${this.last ? `&after=${this.last}` : ''}`;
            } else {
                url = `https://www.reddit.com/${this.redditType.get()}/${this.redditAsset.get()}/.json?limit=50${this.last ? `&after=${this.last}` : ''}`;
            }
            // console.log(url)
            const imageObj = objCopy(this.imageObj.get());
            let numPosts = 0;
            axios.get(url).then((message) => {
                // console.log(message.data)
                if (message.data) {
                    this.last = message.data.data.after as string;
                    const children = message.data.data.children;
                    for (let i = 0; i < children.length; i++) {
                        const post = children[i].data;
                        if (post.preview && post.preview.images && post.preview.images.length > 0) {
                            const author = post.author;
                            const images = post.preview.images;
                            const title = post.title;
                            for (let i = 0; i < images.length; i++) {
                                const fullSize = imgUrl(images[i].source.url);
                                if (!(this.shownImgUrls.includes(fullSize))) {
                                    const imgObj: IImageObj = {
                                        id: uuid(),
                                        author: author,
                                        image: fullSize,
                                        title: title,
                                        post: `https://www.reddit.com${post.permalink}`,
                                        isFocused: false
                                    };
                                    imageObj.push(imgObj)
                                    this.shownImgUrls.push(fullSize)
                                }
                            }
                        }
                        numPosts++;
                    }
                }
                this.imageObj.set(imageObj)
                this.isLoading.set(false);
                window.requestAnimationFrame(() => {
                    if (this.loaderVisible && numPosts > 0) {
                        this.fetchNext();
                    }
                })
            }).catch((e) => {
                this.isLoading.set(false);
                console.log(e)
            })
        } else {
            wait(500).then(() => {
                this.fetchNext();
            })
        }
    }

    // not used directly. Only called by listener
    private updateLocation = (pathName: string) => {
        console.log('location updated', pathName)
        const publicUrl = process.env.PUBLIC_URL || '';
        let cleanPathname = pathName.split(publicUrl).join('');
        const locArr = cleanPathname.split('/').filter(item => item !== '');
        if (locArr.length === 2) {
            this.redditType.set(locArr[0]);
            this.redditAsset.set(locArr[1]);
        } else {
            this.redditType.set(null);
            this.redditAsset.set(null);
        }
        this.imageObj.set([]);
        nextFrame().then(() => {
            this.fetchNext();
        })
    }
}

let store = new Store;
(window as any).store = store;

export default store;