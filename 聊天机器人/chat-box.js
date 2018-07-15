

    window.onload = function () {
      var i = true;

      var btnk = document.getElementById('btnk');
      // console.log(btnk);
      btnk.onclick = function () {
        //  alert('点击事件')
        check();
        // 调用封装的函数
        
      }
      var btncolor ;
      // 按下键盘发送信息
      window.onkeydown = function (e) {
        e = e || window.event;
        // console.log(e.keyCode);

        if (e.keyCode == 13) {
          check();
          // 调用封装的函数
          // 按钮变色 按下键盘的同时按钮变色
          // 设置颜色前先获取按钮原本的颜色
          btncolor = btnk.style.backgroundColor ;
          // console.log(btncolor);
          console.log(btncolor);
          btnk.style.backgroundColor = "orange";

          // //清空input输入框
          var inputsea = document.getElementsByTagName('input')[0];
          // console.log(inputsea);
          window.onkeyup = function (e) {
            e = e || window.event;
            if (e.keyCode == 13) {
              inputsea.value = "";
              // 键盘弹起时 恢复按钮原本的颜色
              btnk.style.backgroundColor = "white"
            }
          }

        }
      }
      
// 鼠标点击按钮 按钮颜色改变
      var btn = document.getElementById('btnk') ;
      // 鼠标按下事件
      // 记录按钮原本的颜色
      btncolor = btnk.style.backgroundColor ;
          // console.log(btncolor);
        console.log(btncolor);
      btn.onmousedown=function () {
        this.style.backgroundColor= 'orange' ;
      }
      // 鼠标弹起时按钮恢复原本的颜色
      btn.onmouseup=function () {
        this.style.backgroundColor= btncolor ;
      }
      // 把聊天内容封装成一个函数 
      function check() {
        if (i = i) {
          var box = document.createElement('div');
          box.setAttribute('class', "header");
          document.body.appendChild(box);
          i = !i;
        }
        var content = document.getElementsByClassName('content')[0];
        var header = document.getElementsByClassName('header')[0];
        var messaremine = document.querySelector('.message').value;


        //console.log(content);
        //获取创建出来的div盒子
        content.appendChild(header);

        //创建p标签 自己的p标签
        var selfp = document.createElement('p');
        selfp.setAttribute("class", "selfp");
        var br = document.createElement('br');
        header.appendChild(br);
        var br = document.createElement('br');
        header.appendChild(br);

        //设置内容
        selfp.innerHTML = messaremine;
        header.appendChild(selfp);

        var br = document.createElement('br');
        header.appendChild(br);
        var br = document.createElement('br');
        header.appendChild(br);

        //创建ajax对象
        var ajax = new XMLHttpRequest();

        ajax.open('post', 'http://www.tuling123.com/openapi/api');

        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        ajax.onload = function () {
          //console.log(ajax.responseText);
          var data = JSON.parse(ajax.responseText);
          // console.log(data);
          //创建机器人的p标签
          var rebotp = document.createElement('p');
          rebotp.setAttribute("class", "rebot");
          rebotp.innerHTML = data.text;
          header.appendChild(rebotp);

        }
        ajax.send('key=c42bcc3c952a46f9a1721bf04b6a5078&info=' + messaremine);



        // console.log(header);
        // 让聊天内容始终显示在窗口可视区  scrollHeight 元素内容的总高度 视口大小
        var heaheight = header.scrollHeight;
        // offsetHeight 盒子的真实宽高 包含所有的内边距及滚动条 和边框大小 不包括外边距
        var conheight = content.offsetHeight;
        //console.log(conheight);//元素内容超出元素上边框的高度
        content.scrollTop = (heaheight - conheight) + 80;
        //  console.log(out);
      }


    }