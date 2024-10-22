import { KeepAlive, createApp } from 'vue'
import { createRouter , createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './view/Home.vue'
import Status from './view/status.vue'
import Database from './view/database.vue'
import Netinfo from './view/Netinfo.vue'
import Remote from './view/Remote.vue'
import Resources from './view/Resources.vue'

// 子项
import Status_default from './view/status/Status_default.vue'
import Status_classics from './view/status/Status_classic.vue'
import Status_netdata from './view/status/Status_netdata.vue'

import Page_404 from './view/Page_404.vue'




const router=createRouter(
    {
        history:createWebHistory(),
        routes:[
            {path:'/',name:'Home',meta:{title:'Home',KeepAlive:true},component:Home},
            {path:'/Status',name:'Status',meta:{title:'Status'},component: Status,children:
            [
                {path:'',name:'Status_default',meta:{title:'Status_Default'},component:Status_default},
                {path:'netdata',name:'Status_netdata',meta:{title:'Netdata'},component:Status_netdata},
                {path:'classics',name:'Status_classics',meta:{title:'Status_Classics'},component:Status_classics}
            ]}, 
            {path:'/Database',name:'Database',meta:{title:'Database'},component:Database},
            {path:'/Resources',name:'Resources',meta:{title:'Resources'},component:Resources},
            {path:'/Netinfo',name:'Netinfo',meta:{title:'Netinfo'},component:Netinfo},
            {path:'/Remote',name:'Remote',meta:{title:'Remote'},component:Remote},

           
            // {path:'*',name:'404',meta:{title:'404'},component:Page_404}
        ]
    }
)

// 路由监听变化，更改标题
router.beforeEach((to,from,next)=>  {
    if(to.meta.title){
        document.title=to.meta.title+' - Home Server';
    }else{
        document.title='Home Server';
    }
    next();
});



createApp(App).use(router).mount('#app')
