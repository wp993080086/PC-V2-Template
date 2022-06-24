# ⚡️ 1，项目描述

<div align=center>
  
![WebPack](https://img.shields.io/badge/4.46.0-WebPack-orange)
![TypeScript](https://img.shields.io/badge/4.1.5-TypeScript-lightgrey)
![Vue](https://img.shields.io/badge/3.2.6-Vue-brightgreen)
![Axios](https://img.shields.io/badge/0.21.3-Axios-ff69b4)
  
</div>

<div align=center>

![Vue-Router](https://img.shields.io/badge/4.0.11-Vue%20Router-blueviolet)
![VueX](https://img.shields.io/badge/4.0.2-Pinia-yellow)
![Element-Plus](https://img.shields.io/badge/1.2.0-beta.6-Element--Plus-409EFF)
![Sass](https://img.shields.io/badge/1.26.5-Sass-orange)

</div>

# 🚀 2，项目运行

- nodejs：14.16+
- 浏览器：Chrome 或 Edge
- 编辑器：Vs Code
## 2.1，安装

```
npm install
```

## 2.2，运行

- 启动配置为.env.development

```
npm run serve
```

## 2.3，打包

- 开发环境打包 配置为.env.dev

```
npm run dev_build
```

- 测试环境打包 配置为.env.test

```
npm run test_build
```

- beta环境打包 配置为.env.beta

```
npm run beta_build
```

- 正式环境打包 配置为.env.production

```
npm run build
```

## 2.4，自动修复

```
npm run lint-fix
```

# 📦️ 3，目录说明

```
├─ .env.xxx // 各环境的配置文件
├─ deploy // docker配置
├─ Dockerfile // docker配置
├─ .eslintrc.js // eslint配置
├─ vue.config.js // vue配置
├─ tsconfig.json // ts配置
└─ src
  │─ App.vue // 根容器
  │─ main.ts
  │─ shims-vue.d.ts
  │  
  ├─ components // 组件
  │          
  ├─ config // 项目级配置
  │    │
  │    └─index.ts
  │      
  ├─ pages // 页面
  │                          
  ├─ router // 路由
  │          
  ├─ services // 接口
  │   │  
  │   │─ request // 封装
  │   └─ api // 接口
  │      
  ├─ static // 静态资源
  │              
  ├─ store // vuex
  │              
  ├─ themes // 主题及公共样式
  │      
  ├─ types // ts类型定义
  │      
  └─ utils // 工具库
  │ │  index.ts
  │ │  loading.ts // loading封装
  │ │  toast.ts // 弹窗封装  
  │ └─md5
  │......
```

# 🔧 4，README更新说明

**如有以下变动，需要更新README**

- package.json文件的scripts命令更新
- 重要目录增删
- 运行环境变更
- 项目地址变更
- 项目背景变更