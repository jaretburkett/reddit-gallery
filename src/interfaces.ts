import { Store } from './store';

export interface IStore extends Store { }
export interface IProps {
    store: IStore
}

export interface IImageObj {
    id: string,
	author: string,
	title: string,
	image: string,
    post: string,
    isFocused: boolean
}

// return from https://www.reddit.com/reddits.json?limit=100
//https://www.reddit.com/search.json?q=starwars&type=sr,user
export interface IRedditSearchObject {
    kind: "string",
    data: {
        modhash: string,
        dist: number,
        children: {
            "kind": string,
            "data": {
                "user_flair_background_color": null,
                "submit_text_html": null,
                "restrict_posting": boolean,
                "user_is_banned": boolean,
                "free_form_reports": boolean,
                "wiki_enabled": null,
                "user_is_muted": boolean,
                "user_can_flair_in_sr": null,
                "display_name": string,
                "header_img": null | string,
                "title": string, //"Home"
                "allow_galleries": boolean,
                "icon_size": null,
                "primary_color": string,
                "active_user_count": null,
                "icon_img": string, //""
                "display_name_prefixed": string, //"r/Home"
                "accounts_active": null,
                "public_traffic": boolean,
                "subscribers": number,
                "user_flair_richtext": any[],
                "videostream_links_count": number,
                "name": string, //"t5_2qs0k"
                "quarantine": boolean,
                "hide_ads": boolean,
                "emojis_enabled": boolean,
                "advertiser_category": string,
                "public_description": string,
                "comment_score_hide_mins": number,
                "allow_predictions": boolean,
                "user_has_favorited": boolean,
                "user_flair_template_id": null,
                "community_icon": string,
                "banner_background_image": string,
                "original_content_tag_enabled": boolean,
                "submit_text": string,
                "description_html": string,
                "spoilers_enabled": boolean,
                "header_title": null,
                "header_size": null,
                "user_flair_position": string,
                "all_original_content": boolean,
                "has_menu_widget": boolean,
                "is_enrolled_in_new_modmail": null,
                "key_color": string,
                "can_assign_user_flair": boolean,
                "created": number,
                "wls": number,
                "show_media_preview": boolean,
                "submission_type": string,
                "user_is_subscriber": boolean,
                "disable_contributor_requests": boolean,
                "allow_videogifs": boolean,
                "user_flair_type": string,
                "allow_polls": boolean,
                "collapse_deleted_comments": boolean,
                "emojis_custom_size": null,
                "public_description_html": null,
                "allow_videos": boolean,
                "is_crosspostable_subreddit": boolean,
                "suggested_comment_sort": null,
                "can_assign_link_flair": boolean,
                "accounts_active_is_fuzzed": boolean,
                "submit_text_label": null,
                "link_flair_position": "right",
                "user_sr_flair_enabled": null,
                "user_flair_enabled_in_sr": boolean,
                "allow_chat_post_creation": boolean,
                "allow_discovery": boolean,
                "user_sr_theme_enabled": boolean,
                "link_flair_enabled": boolean,
                "subreddit_type": "public" | "private",
                "notification_level": null,
                "banner_img": string,
                "user_flair_text": null,
                "banner_background_color": string,
                "show_media": boolean,
                "id": string, //"2qs0k"
                "user_is_contributor": boolean,
                "over18": boolean,
                "description": string,
                "is_chat_post_feature_enabled": boolean,
                "submit_link_label": null,
                "user_flair_text_color": null,
                "restrict_commenting": boolean,
                "user_flair_css_class": null,
                "allow_images": boolean,
                "lang": "en",
                "whitelist_status": string,
                "url": string, //"/r/Home/"
                "created_utc": number,
                "banner_size": null,
                "mobile_banner_image": string,
                "user_is_moderator": boolean
            }
        }[],
        after: string | null,
        before: string | null
    }
}