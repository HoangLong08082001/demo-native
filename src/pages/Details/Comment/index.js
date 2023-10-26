import React from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import Rating from "./Rating";
import imgperson from '../../../assets/images/slider/th.jpeg'
const cx = classNames.bind(styles);
function Comment() {

    return ( <div>
        <div className={cx("box")}>
            <div className={cx("box-push-comment")}>
                <div className={cx("box-push-comment-left")} >
                    <img src={imgperson}></img>
                </div>
                <div className={cx("box-push-comment-right")}>
                    <h5>Add a comment</h5>
                    <div className={cx("box-push-comment-rating")}><Rating/></div>
                    <div className={cx("box-push-comment-text")}>
                        <textarea placeholder="What is your view"></textarea>
                    </div>
                    <div className={cx("box-push-comment-button")}>
                        <button>SEND </button>
                        
                    </div>
                </div>
                
              
            </div>
            <div className={cx("box-show-comment")}>
                
                    <h5>Lượt đánh giá bình luận<span>(5)</span></h5>
                    
                
                <div className={cx("box-show-comment-reponse")}>
                    <p>Chất lượng tour rất là tốt</p>
                    <div><img src={imgperson}></img><span>Dang Tuyen</span></div>
                </div>
                <div className={cx("box-show-comment-reponse")}>
                    <p>Chất lượng tour rất là tốt</p>
                    <div><img src={imgperson}></img><span>Dang Tuyen</span></div>
                </div>
                <div className={cx("box-show-comment-reponse")}>
                    <p>Chất lượng tour rất là tốt</p>
                    <div><img src={imgperson}></img><span>Dang Tuyen</span></div>
                </div>
                <div className={cx("box-show-comment-reponse")}>
                    <p>Chất lượng tour rất là tốt</p>
                    <div><img src={imgperson}></img><span>Dang Tuyen</span></div>
                </div>
            </div>
        </div>
    </div>);
}

export default Comment;