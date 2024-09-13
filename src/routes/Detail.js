import React from 'react';
import {useParams} from 'react-router-dom';

const Detail = (props) => {
    let {id}= useParams();
    return (
        <div className='mt20'>
            <div className='detailCard'>
                <div className='imgWarp'>
                    <img src={props.datas[id].imges} width="80%" alt="거울" />
                </div>
                <div className='info'>
                    <h4 className="mt20">{props.datas[id].title}</h4>
                    <p>{props.datas[id].content}</p>
                    <p className='price'>{props.datas[id].price}</p>
                    <button className='btn'>주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;