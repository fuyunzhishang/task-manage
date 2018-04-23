<template>
<div class="add-image-container">
    <mt-field label="标题" placeholder="请输入标题" v-model="title"></mt-field>
    <el-upload class="avatar-uploader" action="http://localhost:1337/upload" :headers="reqHeader" :show-file-list="false" :on-success="handleAvatarSuccess">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            imageUrl: '',
            reqHeader: {
                ['Authorization']: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWMwZWNiZjVhMzQwYTI2MDQyYjk3NmMiLCJpYXQiOjE1MjM3OTk5NzAsImV4cCI6MTUyNjM5MTk3MH0.TPMVEJrZsn4zM7iu_z8rwAHllqwCgo_uEzvvQf0mSXw'
                //['Content-Type']: 'multipart/form-data; boundary=----WebKitFormBoundary7N1BYOcPkTkILtsM'
            },
            title: ''
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        update(e) {
            let file = e.target.files[0];
            let param = new FormData(); //创建form对象
            param.append('file', file, file.name); //通过append向form对象添加数据
            param.append('chunk', '0'); //添加form表单中其他数据
            console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers: {
                    'Content-Type': 'multipart/*'
                }
            }; //添加请求头
            axios.post('http://localhost:1337/upload', param, config)
                .then(response => {
                    console.log(response.data);
                })
        }
    }
}
</script>

<style lang="scss">
.avatar-uploader {
    width: 50%;
    margin: 0 auto;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
