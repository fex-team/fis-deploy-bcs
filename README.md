# fis-deploy-bcs

## 说明

将FIS产出上传至BCS  **仅支持FIS 1.8.5+**

## 使用方法

安装

```bash
npm i fis-deploy-bcs -g
```

启用

```javascript
fis.config.set('modules.deploy', ['default', 'bcs'])
```

配置

```javascript
fis.config.set('settings.deploy.bcs', {
    publish : {
        host: 'bcs.duapp.com',
        ak: YOUR_AK,
        sk: YOUR_SK,
        bucket: YOUR_BUCKET,
        to: '/'
    }   
});
```

发布

```bash
fis release -Dompd publish
```
