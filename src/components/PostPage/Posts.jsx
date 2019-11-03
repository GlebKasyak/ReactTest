import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error";

export class PostPage extends React.Component {

    state = {
        isLoading: true,
        error: null,
        limit: 10,
        page: 1,
        posts: []
    };

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        const { limit, page, posts } = this.state;
        this.setState({page: page + 1});

        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then((res) => this.setState({isLoading: false, posts: posts.concat(res)}))
            .catch((error) => this.setState({ isLoading: false, error: error }));
    };

    render() {
        const { error, isLoading, posts } = this.state;
        const errorMessage = error ? <Error className="error" message={error.message}/> : null;
        const spinner = isLoading ? <Loading /> : null;

        return (
            <>
            {errorMessage}
            {spinner}
                <InfiniteScroll
                    dataLength={posts.length}
                    next={this.getPosts}
                    hasMore={true}
                    loader={
                        <h4><Loading /></h4>
                    }
                >
                    <div className="container-fluid">
                       <div className="row justify-content-center">
                           {posts.map(user =>
                               <div className="col-8 user" key={user.id}>
                                   <p>Id: {user.id}</p>
                                   <p>Title: {user.title}</p>
                                   <p>Body: {user.body}</p>
                               </div>
                           )}
                       </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }

}
