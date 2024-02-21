"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[8960],{8960:(t,i,e)=>{e.d(i,{Particle:()=>f});var s=e(7312),o=e(972),a=e(5060),n=e(5836),l=e(154),r=e(4388),h=e(7892),c=e(832),d=e(140);const p=.5;function u(t){if(!(0,o.Sc)(t.outMode,t.checkModes))return;const i=2*t.radius;t.coord>t.maxCoord-i?t.setCb(-t.radius):t.coord<i&&t.setCb(t.radius)}class f{constructor(t,i){var e=this;this.container=i,this._calcPosition=function(t,i,o){var a,n,l,r;let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;for(const[,s]of t.plugins){const t=void 0!==s.particlePosition?s.particlePosition(i,e):void 0;if(t)return h.E.create(t.x,t.y,o)}const d=t.canvas.size,p=(0,s.ai)({size:d,position:i}),f=h.E.create(p.x,p.y,o),v=e.getRadius(),g=e.options.move.outModes,y=i=>{u({outMode:i,checkModes:["bounce"],coord:f.x,maxCoord:t.canvas.size.width,setCb:t=>f.x+=t,radius:v})},b=i=>{u({outMode:i,checkModes:["bounce"],coord:f.y,maxCoord:t.canvas.size.height,setCb:t=>f.y+=t,radius:v})};if(y(null!==(a=g.left)&&void 0!==a?a:g.default),y(null!==(n=g.right)&&void 0!==n?n:g.default),b(null!==(l=g.top)&&void 0!==l?l:g.default),b(null!==(r=g.bottom)&&void 0!==r?r:g.default),e._checkOverlap(f,c)){const i=1;return e._calcPosition(t,void 0,o,c+i)}return f},this._calculateVelocity=()=>{const t=(0,s.hT)(this.direction).copy(),i=this.options.move;if("inside"===i.direction||"outside"===i.direction)return t;const e=(0,s.qy)((0,s.qS)(i.angle.value)),o=(0,s.qy)((0,s.qS)(i.angle.offset)),a={left:o-e*p,right:o+e*p};return i.straight||(t.angle+=(0,s.jy)((0,s.Ws)(a.left,a.right))),i.random&&"number"===typeof i.speed&&(t.length*=(0,s.CE)()),t},this._checkOverlap=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const o=e.options.collisions,n=e.getRadius();if(!o.enable)return!1;const l=o.overlap;if(l.enable)return!1;const r=l.retries;if(r>=0&&i>r)throw new Error("".concat(a.iQ," particle is overlapping and can't be placed"));return!!e.container.particles.find((i=>(0,s.c$)(t,i.position)<n+i.getRadius()))},this._getRollColor=t=>{var i;if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;const e=this.roll.horizontal&&this.roll.vertical?2:1,s=this.roll.horizontal?Math.PI*p:0;return Math.floor(((null!==(i=this.roll.angle)&&void 0!==i?i:0)+s)/(Math.PI/e))%2?this.backColor?this.backColor:this.roll.alter?(0,c.OY)(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{var i,e;const a=this.container,n=(0,s.qS)(this.options.zIndex.value);this.position=this._calcPosition(a,t,(0,s.qk)(n,0,a.zLayers)),this.initialPosition=this.position.copy();const l=a.canvas.size;switch(this.moveCenter={...(0,o.Gq)(this.options.move.center,l),radius:null!==(i=this.options.move.center.radius)&&void 0!==i?i:0,mode:null!==(e=this.options.move.center.mode)&&void 0!==e?e:"percent"},this.direction=(0,s.aC)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=r.C.origin},this._engine=t}destroy(t){var i;if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const e=this.container,s=this.pathGenerator,o=e.shapeDrawers.get(this.shape);null===o||void 0===o||null===(i=o.particleDestroy)||void 0===i||i.call(o,this);for(const[,l]of e.plugins){var a;null===(a=l.particleDestroyed)||void 0===a||a.call(l,this,t)}for(const l of e.particles.updaters){var n;null===(n=l.particleDestroyed)||void 0===n||n.call(l,this,t)}null===s||void 0===s||s.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}async draw(t){const i=this.container,e=i.canvas;for(const[,s]of i.plugins)await e.drawParticlePlugin(s,this,t);await e.drawParticle(this,t)}getFillColor(){var t;return this._getRollColor(null!==(t=this.bubble.color)&&void 0!==t?t:(0,n._U)(this.color))}getMass(){return this.getRadius()**2*Math.PI*p}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){var t;return null!==(t=this.bubble.radius)&&void 0!==t?t:this.size.value}getStrokeColor(){var t;return this._getRollColor(null!==(t=this.bubble.color)&&void 0!==t?t:(0,n._U)(this.strokeColor))}async init(t,i,e,r){var h,c,p,u,f,v,g,y,b,w,C;const m=this.container,_=this._engine;this.id=t,this.group=r,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const z=m.retina.pixelRatio,P=m.actualOptions,D=(0,d.o)(this._engine,m,P.particles),k=D.effect.type,x=D.shape.type,{reduceDuplicates:R}=D;this.effect=(0,o.pd)(k,this.id,R),this.shape=(0,o.pd)(x,this.id,R);const M=D.effect,I=D.shape;if(e){var S,q;if(null!==(S=e.effect)&&void 0!==S&&S.type){const t=e.effect.type,i=(0,o.pd)(t,this.id,R);i&&(this.effect=i,M.load(e.effect))}if(null!==(q=e.shape)&&void 0!==q&&q.type){const t=e.shape.type,i=(0,o.pd)(t,this.id,R);i&&(this.shape=i,I.load(e.shape))}}this.effectData=function(t,i,e,s){const a=i.options[t];if(a)return(0,o.Ww)({close:i.close,fill:i.fill},(0,o.pd)(a,e,s))}(this.effect,M,this.id,R),this.shapeData=function(t,i,e,s){const a=i.options[t];if(a)return(0,o.Ww)({close:i.close,fill:i.fill},(0,o.pd)(a,e,s))}(this.shape,I,this.id,R),D.load(e);const E=this.effectData;E&&D.load(E.particles);const G=this.shapeData;G&&D.load(G.particles);const F=new l.O(_,m);F.load(m.actualOptions.interactivity),F.load(D.interactivity),this.interactivity=F,this.effectFill=null!==(h=null===E||void 0===E?void 0:E.fill)&&void 0!==h?h:D.effect.fill,this.effectClose=null!==(c=null===E||void 0===E?void 0:E.close)&&void 0!==c?c:D.effect.close,this.shapeFill=null!==(p=null===G||void 0===G?void 0:G.fill)&&void 0!==p?p:D.shape.fill,this.shapeClose=null!==(u=null===G||void 0===G?void 0:G.close)&&void 0!==u?u:D.shape.close,this.options=D;const O=this.options.move.path;this.pathDelay=(0,s.qS)(O.delay.value)*a.Ub,O.generator&&(this.pathGenerator=this._engine.getPathGenerator(O.generator),this.pathGenerator&&m.addPath(O.generator,this.pathGenerator)&&await this.pathGenerator.init(m)),m.retina.initParticle(this),this.size=(0,o.aI)(this.options.size,z),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(i),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy();this.moveDecay=1-(0,s.qS)(this.options.move.decay);const T=m.particles;T.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/m.zLayers,this.sides=24;let V=m.effectDrawers.get(this.effect);V||(V=this._engine.getEffectDrawer(this.effect),V&&m.effectDrawers.set(this.effect,V)),null!==(f=V)&&void 0!==f&&f.loadEffect&&await V.loadEffect(this);let W=m.shapeDrawers.get(this.shape);W||(W=this._engine.getShapeDrawer(this.shape),W&&m.shapeDrawers.set(this.shape,W)),null!==(v=W)&&void 0!==v&&v.loadShape&&await W.loadShape(this);const L=null===(g=W)||void 0===g?void 0:g.getSidesCount;L&&(this.sides=L(this)),this.spawning=!1,this.shadowColor=(0,n.WC)(this.options.shadow.color);for(const s of T.updaters)await s.init(this);for(const s of T.movers){var U;await(null===(U=s.init)||void 0===U?void 0:U.call(s,this))}await(null===(y=V)||void 0===y||null===(b=y.particleInit)||void 0===b?void 0:b.call(y,m,this)),await(null===(w=W)||void 0===w||null===(C=w.particleInit)||void 0===C?void 0:C.call(w,m,this));for(const[,s]of m.plugins){var j;null===(j=s.particleCreated)||void 0===j||j.call(s,this)}}isInsideCanvas(){const t=this.getRadius(),i=this.container.canvas.size,e=this.position;return e.x>=-t&&e.y>=-t&&e.y<=i.height+t&&e.x<=i.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const i of this.container.particles.updaters){var t;null===(t=i.reset)||void 0===t||t.call(i,this)}}}}}]);
//# sourceMappingURL=8960.0ea381fd.chunk.js.map