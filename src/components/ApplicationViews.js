import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from './categories/CategoriesList'
import { CategoryProvider } from './categories/CategoryProvider'

import { TagProvider } from './tags/TagProvider'
import { Tags } from "./tags/Tags"
import { TagForm } from './tags/TagForm'

import { CommentProvider } from "./comments/CommentProvider"
import { PostComments } from "./comments/PostComments"

import { PostProvider } from './posts/PostProvider'
import { Posts } from './posts/Posts'
import { PostForm } from './posts/PostForm'
import { SinglePost } from './posts/SinglePost'
import { UserPosts } from './posts/UserPosts'

import { UserProfiles } from './users/UserProfiles'
import { UserProvider } from './users/UserProvider'
import { SingleUser } from './users/SingleUser'

import { ReactionProvider } from './reactions/ReactionProvider'
import { NavBar } from './nav/NavBar'


import { Home } from './home/Home'

export const ApplicationViews = () => {
    return <>
        <main style={{
            lineHeight: "1.75rem"
        }}>
            {/* <CategoryProvider>
                <Route exact path="/categories" render={props => <CategoryList {...props} />}/>
            </CategoryProvider> */}
            <UserProvider>
                <TagProvider>
                    <CategoryProvider>
                        <PostProvider>
                            <CommentProvider>
                                <ReactionProvider> 
                                    <Route render={props => <NavBar {...props} />}/>
                                    <Route exact path="/allposts" render={props => <Posts {...props} />}/>
                                    <Route exact path="/addPost" render={props => <PostForm {...props} />}/>
                                    <Route exact path="/posts/:postId" render={props => <SinglePost {...props} />}/>
                                    <Route exact path="/posts?category=:categoryId(\d+)" render={props => <Posts {...props} />}/>
                                    <Route exact path="/posts/:postId(\d+)/edit" render={props => <PostForm {...props} />}/>
                                    <Route exact path="/categories" render={props => <CategoryList {...props} />}/>
                                    <Route exact path="/tags" render={props => <Tags {...props} />} />
                                    <Route exact path="/tags/new" render={props => <TagForm {...props} />} />
                                    <Route exact path="/tags/:tagId(\d+)/edit" render={props => <TagForm {...props} />} />
                                    <Route exact path="/myposts/:userId(\d+)" render={props => <UserPosts {...props} />} />
                                    <Route exact path="/" render={props => <Home {...props} />}/>
                                    <Route exact path="/users" render={props => <UserProfiles {...props} />} />
                                    <Route exact path="/users/:userId(\d+)" render={props => <SingleUser {...props} />} />
                                    <Route exact path="/comments/:postId(\d+)" render={props => <PostComments {...props} />} />
                                </ReactionProvider>  
                            </CommentProvider>
                        </PostProvider>
                    </CategoryProvider>
                </TagProvider>
            </UserProvider>
        </main>
    </>
}
