import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as ArticleAction from '../action/article';
import Container from '../component/container';

import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui';


class HomeApp extends React.Component {

  constructor () {
    super(); 
  }

  renderRecommendList(){

    const appMsgIcon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" />;

    return (
        <Panel access>
            <PanelHeader>
                特色服务
            </PanelHeader>
            <PanelBody>
                <MediaBox type="appmsg" href="javascript:void(0);">
                    <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>盘前股讯</MediaBoxTitle>
                        <MediaBoxDescription>
                            今天，Model X 在中国市场进行首次亮相，同时这也是这款新车的亚洲首秀。
                        </MediaBoxDescription>
                    </MediaBoxBody>
                </MediaBox>
            </PanelBody>
            <PanelFooter href="javascript:void(0);">
                查看更多
            </PanelFooter>
        </Panel>
    )
  }

  renderArticleList(){

    return (
      <Panel access>
          <PanelHeader>
              策略热文
          </PanelHeader>
          <PanelBody>
              <MediaBox type="text"  href="javascript:void(0);">
                  <MediaBoxTitle>新影业公司兴起，贾樟柯商业电影公司“暖流”宣布完成3000万融资</MediaBoxTitle>
                  <MediaBoxDescription>
                      据了解，暖流文化旨在拍摄商业电影，以及从事电影人才教育，不过考虑到投入成本等问题，暖流在目前将业务重心集中在电影出品上。贾樟柯是这家公司的大股东，影评人王宏、财经作家吴晓波、投资人曹国雄为合伙人。
                  </MediaBoxDescription>
                  <MediaBoxInfo>
                      <MediaBoxInfoMeta>文字来源</MediaBoxInfoMeta>
                      <MediaBoxInfoMeta>时间</MediaBoxInfoMeta>
                      <MediaBoxInfoMeta extra>其它信息</MediaBoxInfoMeta>
                  </MediaBoxInfo>
              </MediaBox>
              <MediaBox type="text"  href="javascript:void(0);">
                  <MediaBoxTitle>世纪明德今年暑期或挂新三板，游学市场的潜力有多大？</MediaBoxTitle>
                  <MediaBoxDescription>
                      这家在去年完成 B 轮融资的公司，认为游学行业经过几十年发展，已经进入 4.0 时代，开始趋于专业、偏向教育化，未来将出现行业整合。
                  </MediaBoxDescription>
                  <MediaBoxInfo>
                      <MediaBoxInfoMeta>文字来源</MediaBoxInfoMeta>
                      <MediaBoxInfoMeta>时间</MediaBoxInfoMeta>
                      <MediaBoxInfoMeta extra>其它信息</MediaBoxInfoMeta>
                  </MediaBoxInfo>
              </MediaBox>
              <MediaBox type="text"  href="javascript:void(0);">
                  <MediaBoxTitle>该不该让学生使用软件学习？</MediaBoxTitle>
                  <MediaBoxDescription>
                      现阶段已经有足够成熟的技术帮助学生在 App 是施展一技之长，他们可以在 App 内创作一些看起来专业的 PPT、或者制作几分钟的教学视频、音频，无论哪种形式的创作都有可能带给学生成就感。
                  </MediaBoxDescription>
                  <MediaBoxInfo>
                      <MediaBoxInfoMeta>文字来源</MediaBoxInfoMeta>
                      <MediaBoxInfoMeta>时间</MediaBoxInfoMeta>
                      <MediaBoxInfoMeta extra>其它信息</MediaBoxInfoMeta>
                  </MediaBoxInfo>
              </MediaBox>
          </PanelBody>
          <PanelFooter href="javascript:void(0);">
              查看更多
          </PanelFooter>
        </Panel>
    );
  }

  render() {

    let recommendList = this.renderRecommendList();

    let articleList = this.renderArticleList();

    return (
      <Container 
      titleEnabled = { true }
      titleText = { '服务' }
      menuEnabled = { true }
      sidebarEnabled = { true }>
        
        { recommendList }

        { articleList }

      </Container>
    );
  }
}

export default connect(state => ({
  article : state.article
}), dispatch => ({ 
  articleAction : bindActionCreators(ArticleAction, dispatch)
}))(HomeApp);

