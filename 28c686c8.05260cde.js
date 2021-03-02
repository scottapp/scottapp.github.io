(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{127:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=a.a.createContext({}),l=function(n){var e=a.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},u=function(n){var e=l(n.components);return a.a.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return t?a.a.createElement(d,p(p({ref:e},c),{},{components:t})):a.a.createElement(d,p({ref:e},c))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},177:function(n,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/501_why_torch_dynamic_graph_4_1-683fefe47650faa667c5e116692fe98b.png"},80:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return p})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(127)),i={title:"501 Why Torch Dynamic Graph"},p={unversionedId:"ai/Docker-PyTorch-Tutorial/501_why_torch_dynamic_graph",id:"ai/Docker-PyTorch-Tutorial/501_why_torch_dynamic_graph",isDocsHomePage:!1,title:"501 Why Torch Dynamic Graph",description:"View more, visit my tutorial page//mofanpy.com/tutorials/",source:"@site/docs/ai/Docker-PyTorch-Tutorial/501_why_torch_dynamic_graph.md",slug:"/ai/Docker-PyTorch-Tutorial/501_why_torch_dynamic_graph",permalink:"/docs/ai/Docker-PyTorch-Tutorial/501_why_torch_dynamic_graph",version:"current",sidebar:"AI",previous:{title:"406 GAN",permalink:"/docs/ai/Docker-PyTorch-Tutorial/406_GAN"},next:{title:"502 GPU",permalink:"/docs/ai/Docker-PyTorch-Tutorial/502_GPU"}},s=[],c={toc:s};function l(n){var e=n.components,i=Object(a.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"View more, visit my tutorial page: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mofanpy.com/tutorials/"}),"https://mofanpy.com/tutorials/"),"\nMy Youtube Channel: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/user/MorvanZhou"}),"https://www.youtube.com/user/MorvanZhou")),Object(o.b)("p",null,"Dependencies:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"torch: 0.1.11"),Object(o.b)("li",{parentName:"ul"},"matplotlib"),Object(o.b)("li",{parentName:"ul"},"numpy")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import torch\nfrom torch import nn\nfrom torch.autograd import Variable\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ntorch.manual_seed(1)    # reproducible\n\n# Hyper Parameters\nINPUT_SIZE = 1          # rnn input size / image width\nLR = 0.02               # learning rate\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"class RNN(nn.Module):\n    def __init__(self):\n        super(RNN, self).__init__()\n\n        self.rnn = nn.RNN(\n            input_size=1,\n            hidden_size=32,     # rnn hidden unit\n            num_layers=1,       # number of rnn layer\n            batch_first=True,   # input & output will has batch size as 1s dimension. e.g. (batch, time_step, input_size)\n        )\n        self.out = nn.Linear(32, 1)\n\n    def forward(self, x, h_state):\n        # x (batch, time_step, input_size)\n        # h_state (n_layers, batch, hidden_size)\n        # r_out (batch, time_step, output_size)\n        r_out, h_state = self.rnn(x, h_state)\n\n        outs = []                                   # this is where you can find torch is dynamic\n        for time_step in range(r_out.size(1)):      # calculate output for each time step\n            outs.append(self.out(r_out[:, time_step, :]))\n        return torch.stack(outs, dim=1), h_state\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"\nrnn = RNN()\nprint(rnn)\n\noptimizer = torch.optim.Adam(rnn.parameters(), lr=LR)   # optimize all cnn parameters\nloss_func = nn.MSELoss()                                # the target label is not one-hotted\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"RNN (\n  (rnn): RNN(1, 32, batch_first=True)\n  (out): Linear (32 -> 1)\n)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"h_state = None   # for initial hidden state\n\nplt.figure(1, figsize=(12, 5))\nplt.ion()   # continuously plot\n\n########################  Below is different #########################\n\n################ static time steps ##########\n# for step in range(60):\n#     start, end = step * np.pi, (step+1)*np.pi   # time steps\n#     # use sin predicts cos\n#     steps = np.linspace(start, end, 10, dtype=np.float32)\n\n################ dynamic time steps #########\nstep = 0\nfor i in range(60):\n    dynamic_steps = np.random.randint(1, 4)  # has random time steps\n    start, end = step * np.pi, (step + dynamic_steps) * np.pi  # different time steps length\n    step += dynamic_steps\n\n    # use sin predicts cos\n    steps = np.linspace(start, end, 10 * dynamic_steps, dtype=np.float32)\n\n#######################  Above is different ###########################\n\n    print(len(steps))       # print how many time step feed to RNN\n\n    x_np = np.sin(steps)    # float32 for converting torch FloatTensor\n    y_np = np.cos(steps)\n\n    x = Variable(torch.from_numpy(x_np[np.newaxis, :, np.newaxis]))    # shape (batch, time_step, input_size)\n    y = Variable(torch.from_numpy(y_np[np.newaxis, :, np.newaxis]))\n\n    prediction, h_state = rnn(x, h_state)   # rnn output\n    # !! next step is important !!\n    h_state = Variable(h_state.data)        # repack the hidden state, break the connection from last iteration\n\n    loss = loss_func(prediction, y)         # cross entropy loss\n    optimizer.zero_grad()                   # clear gradients for this training step\n    loss.backward()                         # backpropagation, compute gradients\n    optimizer.step()                        # apply gradients\n\n    # plotting\n    plt.plot(steps, y_np.flatten(), 'r-')\n    plt.plot(steps, prediction.data.numpy().flatten(), 'b-')\n    plt.draw()\n    plt.pause(0.05)\n\nplt.ioff()\nplt.show()\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"20\n30\n20\n20\n30\n30\n10\n10\n30\n20\n20\n20\n30\n10\n10\n30\n10\n10\n30\n20\n20\n10\n30\n10\n30\n10\n20\n20\n30\n30\n20\n20\n30\n30\n10\n20\n20\n10\n30\n10\n20\n10\n20\n10\n20\n30\n30\n10\n10\n20\n20\n20\n20\n10\n10\n20\n10\n10\n20\n30\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"png",src:t(177).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"")))}l.isMDXComponent=!0}}]);