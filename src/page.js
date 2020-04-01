import React from 'react'
import './page.css'

export default function page(props) {
    let pageNum = pageNumebr(props);
    let min = minPageNumber(props);
    let max = maxPageNumber(min, pageNum, props);
    let numbers = [];
    for(let i = min; i <= max; i++){
    numbers.push(<span className={props.current === i ? 'item active' : 'item'} key={i} onClick={() => { toPage(i, props) }} >{i}</span>)
    }
    return (
        <>
        <span className={props.current === 1 ? 'item disabled' : 'item'} onClick={() => {toPage(1, props)}} >首页</span>
        <span className={props.current === 1 ? 'item disabled' : 'item'} onClick={() => {toPage(props.current - 1, props)}} >上一页</span>

        {numbers}

        <span className={props.current === pageNum ? 'item disabled' : 'item'} onClick={() => {toPage(props.current + 1, props)}} >下一页</span>
        <span className={props.current === pageNum ? 'item disabled' : 'item'} onClick={() => {toPage(pageNum, props)}} >尾页</span>
       <span>{props.current}</span> / <span>{pageNum}</span>
        </>
    )
}

//求最小的页数
function minPageNumber(props){
    let min = props.current - Math.floor(props.panelNumber / 2);
    if(min < 0){
        min = 1;
    }
    return min;
}

//求最大的页数
function maxPageNumber(min, pageNum, props){
    let max = min + props.panelNumber - 1;
    if(max > pageNum){
        max = pageNum;
    }
    return max;
}


//总页数
function pageNumebr(props){
    return Math.floor(props.total / props.limit);
}

//跳转页面

function toPage(target, props){
    if(target === props.current){
        return; //目标页与跳转页相同
    }
    if(target > pageNumebr(props)){
        target = pageNumebr(props)
        return;
    }
    if(target < 1){
        target = 1;
        return;
    }

    props.onChangePage&&props.onChangePage(target);
}