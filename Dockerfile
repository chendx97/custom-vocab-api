# 使用Node.js的官方镜像作为基础 
FROM node:14 

# 在容器中创建一个工作目录 
WORKDIR /app 

# 复制应用程序文件到容器中 
COPY package*.json ./ 

# 安装依赖项 
RUN npm install 

# 复制应用程序代码到容器中 
COPY . . 

# 暴露容器的端口 
EXPOSE 3000 

# 定义容器启动时运行的命令 
CMD ["npm", "start"]
