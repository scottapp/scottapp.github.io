(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?r.a.createElement(m,s(s({ref:n},l),{},{components:t})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},176:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/502_GPU_9_0-095ccc2aecda8720c3883a0c751af6b0.png"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(127)),c={title:"502 GPU"},s={unversionedId:"ai/Docker-PyTorch-Tutorial/502_GPU",id:"ai/Docker-PyTorch-Tutorial/502_GPU",isDocsHomePage:!1,title:"502 GPU",description:"View more, visit my tutorial page//mofanpy.com/tutorials/",source:"@site/docs/ai/Docker-PyTorch-Tutorial/502_GPU.md",slug:"/ai/Docker-PyTorch-Tutorial/502_GPU",permalink:"/docs/ai/Docker-PyTorch-Tutorial/502_GPU",version:"current",sidebar:"AI",previous:{title:"501 Why Torch Dynamic Graph",permalink:"/docs/ai/Docker-PyTorch-Tutorial/501_why_torch_dynamic_graph"},next:{title:"503 Dropout",permalink:"/docs/ai/Docker-PyTorch-Tutorial/503_dropout"}},i=[{value:"Training",id:"training",children:[]},{value:"Test",id:"test",children:[]}],l={toc:i};function p(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"View more, visit my tutorial page: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mofanpy.com/tutorials/"}),"https://mofanpy.com/tutorials/"),"\nMy Youtube Channel: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/user/MorvanZhou"}),"https://www.youtube.com/user/MorvanZhou")),Object(o.b)("p",null,"Dependencies:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"torch: 0.1.11"),Object(o.b)("li",{parentName:"ul"},"torchvision")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import torch\nimport torch.nn as nn\nfrom torch.autograd import Variable\nimport torch.utils.data as Data\nimport torchvision\n\ntorch.manual_seed(1)\n\nimport matplotlib.pyplot as plt\n%matplotlib inline\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"EPOCH = 1\nBATCH_SIZE = 50\nLR = 0.001\nDOWNLOAD_MNIST = False\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"train_data = torchvision.datasets.MNIST(\n    root='./mnist/', \n    train=True, \n    transform=torchvision.transforms.ToTensor(), \n    download=DOWNLOAD_MNIST,)\n\ntrain_loader = Data.DataLoader(\n    dataset=train_data, \n    batch_size=BATCH_SIZE, \n    shuffle=True)\n\ntest_data = torchvision.datasets.MNIST(\n    root='./mnist/', train=False)\n\n# !!!!!!!! Change in here !!!!!!!!! #\ntest_x = Variable(torch.unsqueeze(test_data.test_data, dim=1)).type(torch.FloatTensor)[:2000].cuda()/255.   # Tensor on GPU\ntest_y = test_data.test_labels[:2000].cuda()\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"class CNN(nn.Module):\n    def __init__(self):\n        super(CNN, self).__init__()\n        self.conv1 = nn.Sequential(\n            nn.Conv2d(in_channels=1, out_channels=16, kernel_size=5, stride=1, padding=2,),                      \n            nn.ReLU(), \n            nn.MaxPool2d(kernel_size=2),)\n        self.conv2 = nn.Sequential(\n            nn.Conv2d(16, 32, 5, 1, 2), \n            nn.ReLU(), \n            nn.MaxPool2d(2),)\n        self.out = nn.Linear(32 * 7 * 7, 10)\n\n    def forward(self, x):\n        x = self.conv1(x)\n        x = self.conv2(x)\n        x = x.view(x.size(0), -1)\n        output = self.out(x)\n        return output\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"cnn = CNN()\n\n# !!!!!!!! Change in here !!!!!!!!! #\ncnn.cuda()      # Moves all model parameters and buffers to the GPU.\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"CNN (\n  (conv1): Sequential (\n    (0): Conv2d(1, 16, kernel_size=(5, 5), stride=(1, 1), padding=(2, 2))\n    (1): ReLU ()\n    (2): MaxPool2d (size=(2, 2), stride=(2, 2), dilation=(1, 1))\n  )\n  (conv2): Sequential (\n    (0): Conv2d(16, 32, kernel_size=(5, 5), stride=(1, 1), padding=(2, 2))\n    (1): ReLU ()\n    (2): MaxPool2d (size=(2, 2), stride=(2, 2), dilation=(1, 1))\n  )\n  (out): Linear (1568 -> 10)\n)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"optimizer = torch.optim.Adam(cnn.parameters(), lr=LR)\nloss_func = nn.CrossEntropyLoss()\n\nlosses_his = []\n")),Object(o.b)("h3",{id:"training"},"Training"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"for epoch in range(EPOCH):\n    for step, (x, y) in enumerate(train_loader):\n\n        # !!!!!!!! Change in here !!!!!!!!! #\n        b_x = Variable(x).cuda()    # Tensor on GPU\n        b_y = Variable(y).cuda()    # Tensor on GPU\n\n        output = cnn(b_x)\n        loss = loss_func(output, b_y)\n        losses_his.append(loss.data[0])\n        optimizer.zero_grad()\n        loss.backward()\n        optimizer.step()\n\n        if step % 50 == 0:\n            test_output = cnn(test_x)\n\n            # !!!!!!!! Change in here !!!!!!!!! #\n            pred_y = torch.max(test_output, 1)[1].cuda().data.squeeze()  # move the computation in GPU\n\n            accuracy = torch.sum(pred_y == test_y).type(torch.FloatTensor) / test_y.size(0)\n            print('Epoch: ', epoch, '| train loss: %.4f' % loss.data[0], '| test accuracy: %.2f' % accuracy)\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Epoch:  0 | train loss: 2.3145 | test accuracy: 0.10\nEpoch:  0 | train loss: 0.5546 | test accuracy: 0.83\nEpoch:  0 | train loss: 0.5856 | test accuracy: 0.89\nEpoch:  0 | train loss: 0.1879 | test accuracy: 0.92\nEpoch:  0 | train loss: 0.0601 | test accuracy: 0.94\nEpoch:  0 | train loss: 0.1772 | test accuracy: 0.95\nEpoch:  0 | train loss: 0.0993 | test accuracy: 0.94\nEpoch:  0 | train loss: 0.2210 | test accuracy: 0.95\nEpoch:  0 | train loss: 0.0379 | test accuracy: 0.96\nEpoch:  0 | train loss: 0.0535 | test accuracy: 0.96\nEpoch:  0 | train loss: 0.0268 | test accuracy: 0.96\nEpoch:  0 | train loss: 0.0910 | test accuracy: 0.96\nEpoch:  0 | train loss: 0.0982 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.3154 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.0418 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.1072 | test accuracy: 0.96\nEpoch:  0 | train loss: 0.0652 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.1042 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.1346 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.0431 | test accuracy: 0.98\nEpoch:  0 | train loss: 0.0276 | test accuracy: 0.97\nEpoch:  0 | train loss: 0.0153 | test accuracy: 0.98\nEpoch:  0 | train loss: 0.0438 | test accuracy: 0.98\nEpoch:  0 | train loss: 0.0082 | test accuracy: 0.97\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"plt.plot(losses_his, label='loss')\nplt.legend(loc='best')\nplt.xlabel('Steps')\nplt.ylabel('Loss')\nplt.ylim((0, 1))\nplt.show()\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"png",src:t(176).default})),Object(o.b)("h3",{id:"test"},"Test"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# !!!!!!!! Change in here !!!!!!!!! #\ntest_output = cnn(test_x[:10])\npred_y = torch.max(test_output, 1)[1].cuda().data.squeeze() # move the computation in GPU\n\nprint(pred_y, 'prediction number')\nprint(test_y[:10], 'real number')\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," 7\n 2\n 1\n 0\n 4\n 1\n 4\n 9\n 5\n 9\n[torch.cuda.LongTensor of size 10 (GPU 0)]\n prediction number\n\n 7\n 2\n 1\n 0\n 4\n 1\n 4\n 9\n 5\n 9\n[torch.cuda.LongTensor of size 10 (GPU 0)]\n real number\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"")))}p.isMDXComponent=!0}}]);