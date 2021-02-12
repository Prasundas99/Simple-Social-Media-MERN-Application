import React from 'react';
import {Grid , CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux';

import Post from './Post/post'

import useStyles from './styles';
const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return(
        
        !posts.length ? <CircularProgress />: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((posts)=> (
                    <Grid key={posts._id} item xs={12} sm={5}>
                        <Post post={posts} />
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}

export default Posts;