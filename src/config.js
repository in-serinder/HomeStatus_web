import { devtools } from "vue";

export default {
    api:{
        baseURL:'127.0.0.1',
        port:{
            api_master:7101,
            res_dir:6000,
            base_info:6325,
            log:6326,
            public_msg:6327,
            status:6328,
            webinfo:6329,
            db_test:6330,

            class_status:6323
        },
        key:'0e4beb61ae3aa262060538e57e5c84db',
        key2:'0b24bc31f4f194570d0ea2ecb4f6468b'
    },
    netdata:{
        home_service_server:{
            ip:'192.168.5.10',
            port:19999
            
        },
        game_server:{
            ip:'192.168.5.15',
            port:19999
        },
        arm_server:{
            ip:'192.168.5.20',
            port:19999
        },

    },
    docker:{
        home_service_server:{
            IP:'192.168.5.10',
            Download:{

            },
            Storage:{

            },
            Tools:{

            },
            OAMS:{

            },
            Web:{

            },
            Synce:{

            },
            Devtools:{

            },
            Media:{

            },
            File_server:{

            },
            File_browser:{

            },

        },
        game_server:{
            IP:'192.168.5.15',
            Game:{

            },
            Storage:{

            },
            File_browser:{

            },

        },
        arm_server:{
            IP:'192.168.5.20',
            Download:{

            },
            Storage:{

            },
            Tools:{

            },
            OAMS:{

            },
            Web:{

            },
            synce:{

            },
            devtools:{
                
            }
        },
        
    },
    Database:{
        home_service_server:{
            ip:'192.168.5.10'
        }
    },
    Mirror_site:{
        USTC:'https://mirrors.ustc.edu.cn/',
        Tsinghua:'https://mirrors.tuna.tsinghua.edu.cn/',
        LZU:'https://mirror.lzu.edu.cn/',
        Aliyun:'https://developer.aliyun.com/mirror/?keyword=debian',
        Site163:'https://mirrors.163.com/'
    }
}