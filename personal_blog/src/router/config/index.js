import {Route} from 'react-router-dom'
import React from 'react'
export default function(routes){
    return routes.map((item,index)=>{
        return <Route path={item.path} render={(router) => {
            if(item.children){
                return <item.component {...router} Routes={item.children} key={index}></item.component>
            }else{
                return <item.component {...router} key={index}></item.component>
            }
        }} key={index}></Route>
    })
}