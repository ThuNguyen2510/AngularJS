import React, { Component } from 'react';
import './ForumDetail.css';
import Header from './Header';
import { Link } from 'react-router-dom';
export class ForumDetail extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h3 >Tiêu đề</h3>
                    <h4>Chủ thớt</h4>
                    <div className="naiyou" >
                        <p>chỗ ni chứa nội dung chi tiết của bài post nè. viết gì hiện chỗ này</p>
                        <Link className="thich"><i className=" fa fa-heart fa-2x"></i></Link>
                        <Link className="ml-2 edit">Sửa</Link>
                        <Link className="ml-2 edit">Xóa</Link>
                        
                    </div>

                    <div className="ttac_cmt">
                        <div className="row bootstrap snippets">
                            <div className="col-md-12 col-md-offset-2 col-sm-12">
                                <div className="comment-wrapper">
                                    <div className="panel panel-info">
                                        <div className="panel-heading mt-4">
                                            Comment panel
              </div>
                                        <div className="panel-body">
                                            <textarea className="form-control" placeholder="write a comment..." rows={3} defaultValue={""} />
                                            <br />
                                            <button type="button" className="btn btn-info pull-right">Post</button>
                                            <div className="clearfix" />
                                            <hr />
                                            <ul className="media-list">
                                                <li className="media">
                                                    <a href="#" className="pull-left">
                                                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                                                    </a>
                                                    <div className="media-body">
                                                        <span className="text-muted pull-right">
                                                            <small className="text-muted">30 min ago</small>
                                                        </span>
                                                        <strong className="text-success">@MartinoMont</strong>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.</p>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <a href="#" className="pull-left">
                                                        <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" className="img-circle" />
                                                    </a>
                                                    <div className="media-body">
                                                        <span className="text-muted pull-right">
                                                            <small className="text-muted">30 min ago</small>
                                                        </span>
                                                        <strong className="text-success">@LaurenceCorreil</strong>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.</p>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <a href="#" className="pull-left">
                                                        <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" className="img-circle" />
                                                    </a>
                                                    <div className="media-body">
                                                        <span className="text-muted pull-right">
                                                            <small className="text-muted">30 min ago</small>
                                                        </span>
                                                        <strong className="text-success">@JohnNida</strong>
                                                        <p>Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ForumDetail;
