import React from 'react';
import { Link } from 'react-router';
import {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
} from 'react-weui';

class ArticleItem extends React.Component {

  constructor() {
    super();
  }

  render() {

    let { article } = this.props;

    let detailLink = {
      pathname : `/articledetail`, 
      query :{
        id:article.id
      }
    };

    return(
       <Link to={ detailLink } className="link-listitem">
          <MediaBox type="text">
              <MediaBoxTitle>{ article.title }</MediaBoxTitle>
              <MediaBoxDescription>
                  { article.summary }
              </MediaBoxDescription>
              <MediaBoxInfo>
                  <MediaBoxInfoMeta>{ article.author }</MediaBoxInfoMeta>
                  <MediaBoxInfoMeta>{ article.date }</MediaBoxInfoMeta>
                  <MediaBoxInfoMeta extra>{ article.viewcount }人阅读</MediaBoxInfoMeta>
              </MediaBoxInfo>
          </MediaBox>
       </Link>
    )
  }
}
export default ArticleItem;
