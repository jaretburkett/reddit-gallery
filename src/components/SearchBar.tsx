import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IRedditSearchObject } from '../interfaces';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { IProps } from '../interfaces';
import { useState as useHookState } from '@hookstate/core';

const defaultSearchResult: IRedditSearchObject = {
    kind: "string",
    data: {
        modhash: '',
        dist: 0,
        children: [],
        after: null,
        before: null
    }
};


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            flexGrow: 1,
            maxWidth: 400
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
            color: '#fff',
        },
        textField: {
            width: '100%'
        }
    }),
);

const getSearch = async (
    str: string,
    type: 'sr' | 'user' = 'sr',
    sort: 'relevance' | 'hot' | 'top' | 'new' | 'comments' = 'top',
    nsfw: boolean = true
) => {
    return new Promise<IRedditSearchObject>(resolve => {
        const url = `https://www.reddit.com/search.json` +
            `?q=${encodeURIComponent(str)}` +
            `&type=${type}` +
            `&show=all` +
            `&sort=${sort}` +
            `&include_over_18=${nsfw ? 'on' : 'off'}`;
        console.log(url)
        axios.get(url)
            .then((response) => {
                // handle success
                console.log(response.data);
                resolve(response.data as IRedditSearchObject)
            })
            .catch((error) => {
                // handle error
                console.log(error);
                resolve(defaultSearchResult)
            })
    });
}

export default (props: IProps) => {
    const classes = useStyles();
    const [searchResult, setSearchResult] = useState(defaultSearchResult);
    const reddits = searchResult && searchResult.data && searchResult.data.children ? searchResult.data.children : [];
    const [open, setOpen] = React.useState(false);
    const loading = open && reddits.length === 0;
    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <Autocomplete
                    id="search-bar"
                    freeSolo
                    open={open}
                    onChange={(event, value) => {
                        console.log('search change', value)
                        if(value){
                            props.store.navigateTo(value);
                        }
                    }}
                    classes={{
                        root: classes.inputRoot
                    }}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    options={reddits.map((option) => {
                        return option.data.url
                    })}
                    style={{ width: '100%' }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            // variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                                classes: {
                                    root: classes.inputInput
                                }
                            }}
                            classes={{
                                root: classes.textField,
                            }}
                            onChange={(event) => {
                                getSearch(event.target.value).then((res) => {
                                    setSearchResult(res)
                                })
                                console.log(event.target.value)
                            }}
                        />
                    )}
                />
            </div>
        </>
    )
};