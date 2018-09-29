import { getAll } from "./BooksAPI";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        };
    }

    componentDidMount() {
        BooksAPI.getAll().then((book) => this.setState({
            title: book.title,
            author: book.authors
        }))
    }

    render() {
        return ( 
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            
                            <BookShelfChanger />

                          </div>
                          <div className="book-title">{this.state.title}</div>
                          <div className="book-authors">{this.state.author}</div>
                        </div>
        );
    }
}

class BookShelfChanger extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
        );
    }
}

