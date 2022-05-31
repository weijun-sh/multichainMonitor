var express = require('express');
var path = require('path');
var app = express();
var axios = require('axios');
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'dist')));
let proxyPrometheus = require('./proxy-prometheus')
const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
let access = 'admin';
const getAccess = () => {
  return access;
}; // 代码中会兼容本地 service mock 以及部署站点的静态数据

proxyPrometheus.init(app).proxy()

app.get('/api/notices' , (req, res) => {
    res.json({
      data: [
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '你收到了 14 份新周报',
          datetime: '2017-08-09',
          type: 'notification',
        },
      ],
    });
}
)

app.get('/api/currentUser', (req, res) => {
  if (!getAccess()) {
    res.status(401).send({
      data: {
        isLogin: false,
      },
      errorCode: '401',
      errorMessage: '请先登录！',
      success: true,
    });
    return;
  }

  res.send({
    success: true,
    data: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      access: getAccess(),
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
    },
  });
});
app.get('/api/users', (req, res) => {
  res.send([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
  ]);
});
app.post('/api/login/account', async (req, res) => {
  const { password, username, type } = req.body;

  if (password === 'admin' && username === 'admin') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'admin',
    });
    access = 'admin';
    return;
  }

  if (password === 'admin' && username === 'user') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'user',
    });
    access = 'user';
    return;
  }

  if (type === 'mobile') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'admin',
    });
    access = 'admin';
    return;
  }

  res.send({
    status: 'error',
    type,
    currentAuthority: 'guest',
  });
  access = 'guest';
});
app.post('/api/login/outLogin', (req, res) => {
  access = '';
  res.send({
    data: {},
    success: true,
  });
});
app.post('/api/register', (req, res) => {
  res.send({
    status: 'ok',
    currentAuthority: 'user',
    success: true,
  });
});


app.listen(20520, function () {});
