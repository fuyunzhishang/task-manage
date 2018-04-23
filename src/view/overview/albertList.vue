<template>
<div class="albert-list">
  <el-upload v-show="albertStatus" class="avatar-uploader" action="/upload" :headers="reqHeader" :show-file-list="false" :on-success="handleAvatarSuccess" >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      imageUrl: '',
      reqHeader: {
        ['Authorization']: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWMwZWNiZjVhMzQwYTI2MDQyYjk3NmMiLCJpYXQiOjE1MjM3OTk5NzAsImV4cCI6MTUyNjM5MTk3MH0.TPMVEJrZsn4zM7iu_z8rwAHllqwCgo_uEzvvQf0mSXw'
        //['Content-Type']: 'multipart/form-data; boundary=----WebKitFormBoundary7N1BYOcPkTkILtsM'
      }
    };
  },
  computed: {
    ...mapState([
      'albertStatus'
    ])
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    }
  }
}
</script>

<style>
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
