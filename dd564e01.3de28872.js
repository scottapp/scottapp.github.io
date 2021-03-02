(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(127)),c={},l={unversionedId:"ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz/1-tensor_tutorial",id:"ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz/1-tensor_tutorial",isDocsHomePage:!1,title:"1-tensor_tutorial",description:"`python",source:"@site/docs/ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz/1-tensor_tutorial.md",slug:"/ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz/1-tensor_tutorial",permalink:"/docs/ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz/1-tensor_tutorial",version:"current",sidebar:"AI",previous:{title:"60 minutes Blitz",permalink:"/docs/ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz"},next:{title:"2-autograd_tutorial",permalink:"/docs/ai/docker-Deep-Learning-with-PyTorch-A-60-Minute-Blitz/2-autograd_tutorial"}},i=[{value:"Getting Started",id:"getting-started",children:[]},{value:"NumPy Bridge",id:"numpy-bridge",children:[]},{value:"CUDA Tensors",id:"cuda-tensors",children:[]}],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"%matplotlib inline\n")),Object(o.b)("h1",{id:"what-is-pytorch"},"What is PyTorch?"),Object(o.b)("p",null,"It\u2019s a Python-based scientific computing package targeted at two sets of\naudiences:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A replacement for NumPy to use the power of GPUs"),Object(o.b)("li",{parentName:"ul"},"a deep learning research platform that provides maximum flexibility\nand speed")),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"Tensors\n^^^^^^^"),Object(o.b)("p",null,"Tensors are similar to NumPy\u2019s ndarrays, with the addition being that\nTensors can also be used on a GPU to accelerate computing."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from __future__ import print_function\nimport torch\n")),Object(o.b)("div",{class:"alert alert-info"},Object(o.b)("h4",null,"Note"),Object(o.b)("p",null,"An uninitialized matrix is declared, but does not contain definite known values before it is used. When an uninitialized matrix is created, whatever values were in the allocated memory at the time will appear as the initial values.")),Object(o.b)("p",null,"Construct a 5x3 matrix, uninitialized:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = torch.empty(5, 3)\nprint(x)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[0., 0., 0.],\n        [0., 0., 0.],\n        [0., 0., 0.],\n        [0., 0., 0.],\n        [0., 0., 0.]])\n")),Object(o.b)("p",null,"Construct a randomly initialized matrix:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = torch.rand(5, 3)\nprint(x)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[0.9865, 0.1274, 0.7110],\n        [0.7913, 0.0158, 0.5978],\n        [0.2369, 0.2046, 0.4035],\n        [0.0053, 0.0930, 0.2927],\n        [0.3107, 0.0234, 0.4800]])\n")),Object(o.b)("p",null,"Construct a matrix filled zeros and of dtype long:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = torch.zeros(5, 3, dtype=torch.long)\nprint(x)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0]])\n")),Object(o.b)("p",null,"Construct a tensor directly from data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = torch.tensor([5.5, 3])\nprint(x)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([5.5000, 3.0000])\n")),Object(o.b)("p",null,"or create a tensor based on an existing tensor. These methods\nwill reuse properties of the input tensor, e.g. dtype, unless\nnew values are provided by user"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = x.new_ones(5, 3, dtype=torch.double)      # new_* methods take in sizes\nprint(x)\n\nx = torch.randn_like(x, dtype=torch.float)    # override dtype!\nprint(x)                                      # result has the same size\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[1., 1., 1.],\n        [1., 1., 1.],\n        [1., 1., 1.],\n        [1., 1., 1.],\n        [1., 1., 1.]], dtype=torch.float64)\ntensor([[ 0.9961,  1.4173,  0.6190],\n        [-0.5865, -0.7380,  0.3860],\n        [-0.0368,  3.1589, -0.6144],\n        [ 0.5596, -1.7465, -0.1054],\n        [ 1.7138,  1.2869, -0.0439]])\n")),Object(o.b)("p",null,"Get its size:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"print(x.size())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"torch.Size([5, 3])\n")),Object(o.b)("div",{class:"alert alert-info"},Object(o.b)("h4",null,"Note"),Object(o.b)("p",null,"``torch.Size`` is in fact a tuple, so it supports all tuple operations.")),Object(o.b)("p",null,"Operations\n^^^^^^^^^^\nThere are multiple syntaxes for operations. In the following\nexample, we will take a look at the addition operation."),Object(o.b)("p",null,"Addition: syntax 1"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"y = torch.rand(5, 3)\nprint(x + y)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[ 1.3526e+00,  2.0229e+00,  7.4820e-01],\n        [-5.5757e-01, -3.1239e-01,  9.9473e-01],\n        [ 1.7129e-01,  4.0996e+00, -3.6312e-01],\n        [ 1.2247e+00, -9.0038e-01, -1.4025e-03],\n        [ 2.6062e+00,  2.0466e+00, -2.9380e-02]])\n")),Object(o.b)("p",null,"Addition: syntax 2"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"print(torch.add(x, y))\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[ 1.3526e+00,  2.0229e+00,  7.4820e-01],\n        [-5.5757e-01, -3.1239e-01,  9.9473e-01],\n        [ 1.7129e-01,  4.0996e+00, -3.6312e-01],\n        [ 1.2247e+00, -9.0038e-01, -1.4025e-03],\n        [ 2.6062e+00,  2.0466e+00, -2.9380e-02]])\n")),Object(o.b)("p",null,"Addition: providing an output tensor as argument"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"result = torch.empty(5, 3)\ntorch.add(x, y, out=result)\nprint(result)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[ 1.3526e+00,  2.0229e+00,  7.4820e-01],\n        [-5.5757e-01, -3.1239e-01,  9.9473e-01],\n        [ 1.7129e-01,  4.0996e+00, -3.6312e-01],\n        [ 1.2247e+00, -9.0038e-01, -1.4025e-03],\n        [ 2.6062e+00,  2.0466e+00, -2.9380e-02]])\n")),Object(o.b)("p",null,"Addition: in-place"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# adds x to y\ny.add_(x)\nprint(y)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([[ 1.3526e+00,  2.0229e+00,  7.4820e-01],\n        [-5.5757e-01, -3.1239e-01,  9.9473e-01],\n        [ 1.7129e-01,  4.0996e+00, -3.6312e-01],\n        [ 1.2247e+00, -9.0038e-01, -1.4025e-03],\n        [ 2.6062e+00,  2.0466e+00, -2.9380e-02]])\n")),Object(o.b)("div",{class:"alert alert-info"},Object(o.b)("h4",null,"Note"),Object(o.b)("p",null,"Any operation that mutates a tensor in-place is post-fixed with an ``_``. For example: ``x.copy_(y)``, ``x.t_()``, will change ``x``.")),Object(o.b)("p",null,"You can use standard NumPy-like indexing with all bells and whistles!"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"print(x[:, 1])\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([ 1.4173, -0.7380,  3.1589, -1.7465,  1.2869])\n")),Object(o.b)("p",null,"Resizing: If you want to resize/reshape tensor, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"torch.view"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = torch.randn(4, 4)\ny = x.view(16)\nz = x.view(-1, 8)  # the size -1 is inferred from other dimensions\nprint(x.size(), y.size(), z.size())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"torch.Size([4, 4]) torch.Size([16]) torch.Size([2, 8])\n")),Object(o.b)("p",null,"If you have a one element tensor, use ",Object(o.b)("inlineCode",{parentName:"p"},".item()")," to get the value as a\nPython number"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"x = torch.randn(1)\nprint(x)\nprint(x.item())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([0.5256])\n0.5256244540214539\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Read later:")),Object(o.b)("p",null,"  100+ Tensor operations, including transposing, indexing, slicing,\nmathematical operations, linear algebra, random numbers, etc.,\nare described\n",Object(o.b)("inlineCode",{parentName:"p"},"here <https://pytorch.org/docs/torch>"),"_."),Object(o.b)("h2",{id:"numpy-bridge"},"NumPy Bridge"),Object(o.b)("p",null,"Converting a Torch Tensor to a NumPy array and vice versa is a breeze."),Object(o.b)("p",null,"The Torch Tensor and NumPy array will share their underlying memory\nlocations (if the Torch Tensor is on CPU), and changing one will change\nthe other."),Object(o.b)("p",null,"Converting a Torch Tensor to a NumPy Array\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"a = torch.ones(5)\nprint(a)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([1., 1., 1., 1., 1.])\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"b = a.numpy()\nprint(b)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[1. 1. 1. 1. 1.]\n")),Object(o.b)("p",null,"See how the numpy array changed in value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"a.add_(1)\nprint(a)\nprint(b)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tensor([2., 2., 2., 2., 2.])\n[2. 2. 2. 2. 2.]\n")),Object(o.b)("p",null,"Converting NumPy Array to Torch Tensor\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nSee how changing the np array changed the Torch Tensor automatically"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import numpy as np\na = np.ones(5)\nb = torch.from_numpy(a)\nnp.add(a, 1, out=a)\nprint(a)\nprint(b)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[2. 2. 2. 2. 2.]\ntensor([2., 2., 2., 2., 2.], dtype=torch.float64)\n")),Object(o.b)("p",null,"All the Tensors on the CPU except a CharTensor support converting to\nNumPy and back."),Object(o.b)("h2",{id:"cuda-tensors"},"CUDA Tensors"),Object(o.b)("p",null,"Tensors can be moved onto any device using the ",Object(o.b)("inlineCode",{parentName:"p"},".to")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# let us run this cell only if CUDA is available\n# We will use ``torch.device`` objects to move tensors in and out of GPU\nif torch.cuda.is_available():\n    device = torch.device("cuda")          # a CUDA device object\n    y = torch.ones_like(x, device=device)  # directly create a tensor on GPU\n    x = x.to(device)                       # or just use strings ``.to("cuda")``\n    z = x + y\n    print(z)\n    print(z.to("cpu", torch.double))       # ``.to`` can also change dtype together!\n')))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,O=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);