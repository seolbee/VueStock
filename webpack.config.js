const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports={
    mode:'development',
    entry:path.join(__dirname, "app.js"),
    output:{
        filename:'dist.js',
        path:path.join(__dirname, "public")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif|PNG)$/,
                loader:'url-loader',
                options:{
                    name:'[hash].[ext]',
                    limit:100000
                }
            },
            {
                test:/.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    resolve:{
        alias:{
            "vue$" : "vue/dist/vue.esm.js",
            "@" : path.join(__dirname, 'src/'),
            "&" : path.join(__dirname, 'src/components/sections/')
        },
        extensions:["*", '.js', '.vue', '.json']
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    externals:{
        moment:'moment'
    }
}