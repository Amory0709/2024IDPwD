import{f as de}from"./chunk-CC7ITS2Z.js";import{$a as E,Bb as ue,Cb as S,Db as u,Ea as j,Fa as o,Fb as L,Ia as B,Ka as A,Na as ne,Oa as U,Pa as c,Qa as m,Ua as ie,V as G,X as R,Yb as ce,Z as d,Za as re,a,ab as _,b as l,bb as v,eb as F,ha as ee,ka as te,kb as w,l as Y,o as K,oa as M,ob as oe,pb as se,qb as ae,rb as H,sa as T,t as J,xb as le,z as Q}from"./chunk-NCG4YGK7.js";var ye=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(o(B),o(T))};static \u0275dir=c({type:n})}return n})(),ke=(()=>{class n extends ye{static \u0275fac=(()=>{let t;return function(r){return(t||(t=te(n)))(r||n)}})();static \u0275dir=c({type:n,features:[m]})}return n})(),Ce=new d("");var Ge={provide:Ce,useExisting:G(()=>P),multi:!0};function Re(){let n=L()?L().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Te=new d(""),P=(()=>{class n extends ye{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Re())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(o(B),o(T),o(Te,8))};static \u0275dir=c({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&F("input",function(g){return r._handleInput(g.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(g){return r._compositionEnd(g.target.value)})},standalone:!1,features:[H([Ge]),m]})}return n})();var je=new d(""),Be=new d("");function Ve(n){return n!=null}function De(n){return ie(n)?K(n):n}function be(n){let e={};return n.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Me(n,e){return e.map(t=>t(n))}function Ue(n){return!n.validate}function Ae(n){return n.map(e=>Ue(e)?e:t=>e.validate(t))}function He(n){if(!n)return null;let e=n.filter(Ve);return e.length==0?null:function(t){return be(Me(t,e))}}function Ee(n){return n!=null?He(Ae(n)):null}function Le(n){if(!n)return null;let e=n.filter(Ve);return e.length==0?null:function(t){let i=Me(t,e).map(De);return Q(i).pipe(J(be))}}function Fe(n){return n!=null?Le(Ae(n)):null}function he(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function We(n){return n._rawValidators}function $e(n){return n._rawAsyncValidators}function W(n){return n?Array.isArray(n)?n:[n]:[]}function N(n,e){return Array.isArray(n)?n.includes(e):n===e}function fe(n,e){let t=W(e);return W(n).forEach(r=>{N(t,r)||t.push(r)}),t}function pe(n,e){return W(e).filter(t=>!N(n,t))}var O=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ee(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Fe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},$=class extends O{name;get formDirective(){return null}get path(){return null}},b=class extends O{_parent=null;name=null;valueAccessor=null},q=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ot=l(a({},qe),{"[class.ng-submitted]":"isSubmitted"}),we=(()=>{class n extends q{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(o(b,2))};static \u0275dir=c({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&E("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[m]})}return n})();var y="VALID",I="INVALID",h="PENDING",C="DISABLED",p=class{},x=class extends p{value;source;constructor(e,t){super(),this.value=e,this.source=t}},V=class extends p{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},D=class extends p{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},f=class extends p{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function ze(n){return(k(n)?n.validators:n)||null}function Ze(n){return Array.isArray(n)?Ee(n):n||null}function Xe(n,e){return(k(e)?e.asyncValidators:n)||null}function Ye(n){return Array.isArray(n)?Fe(n):n||null}function k(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var z=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return u(this.statusReactive)}set status(e){u(()=>this.statusReactive.set(e))}_status=S(()=>this.statusReactive());statusReactive=A(void 0);get valid(){return this.status===y}get invalid(){return this.status===I}get pending(){return this.status==h}get disabled(){return this.status===C}get enabled(){return this.status!==C}errors;get pristine(){return u(this.pristineReactive)}set pristine(e){u(()=>this.pristineReactive.set(e))}_pristine=S(()=>this.pristineReactive());pristineReactive=A(!0);get dirty(){return!this.pristine}get touched(){return u(this.touchedReactive)}set touched(e){u(()=>this.touchedReactive.set(e))}_touched=S(()=>this.touchedReactive());touchedReactive=A(!1);get untouched(){return!this.touched}_events=new Y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(fe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(fe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(pe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new V(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new V(!0,i))}markAsPending(e={}){this.status=h;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new f(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=C,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.value,i)),this._events.next(new f(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=y,this._forEachChild(i=>{i.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===y||this.status===h)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.value,t)),this._events.next(new f(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?C:y}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=h,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=De(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new f(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?C:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(h)?h:this._anyControlsHaveStatus(I)?I:y}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new V(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new D(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){k(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ze(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ye(this._rawAsyncValidators)}};var Se=new d("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Ke(n,e){return[...e.path,n]}function Je(n,e,t=Z){et(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),tt(n,e),it(n,e),nt(n,e),Qe(n,e)}function ge(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Qe(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function et(n,e){let t=We(n);e.validator!==null?n.setValidators(he(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=$e(n);e.asyncValidator!==null?n.setAsyncValidators(he(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();ge(e._rawValidators,r),ge(e._rawAsyncValidators,r)}function tt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ie(n,e)})}function nt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ie(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Ie(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function it(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function rt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ot(n){return Object.getPrototypeOf(n.constructor)===ke}function st(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===P?t=s:ot(s)?i=s:r=s}),r||i||t||null}function me(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function _e(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var at=class extends z{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(ze(t),Xe(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(t)&&(t.nonNullable||t.initialValueIsDefault)&&(_e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var lt={provide:b,useExisting:G(()=>X)},ve=Promise.resolve(),X=(()=>{class n extends b{_changeDetectorRef;callSetDisabledState;control=new at;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new M;constructor(t,i,r,s,g,xe){super(),this._changeDetectorRef=g,this.callSetDisabledState=xe,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=st(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),rt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Je(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ve.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&ue(i);ve.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ke(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(o($,9),o(je,10),o(Be,10),o(Ce,10),o(le,8),o(Se,8))};static \u0275dir=c({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[H([lt]),m,ee]})}return n})();var ut=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=U({type:n});static \u0275inj=R({})}return n})();var Ne=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Se,useValue:t.callSetDisabledState??Z}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=U({type:n});static \u0275inj=R({imports:[ut]})}return n})();var Oe=class n{constructor(e,t){this.router=e;this.supportersService=t}name;enterGame(){this.name&&(this.supportersService.setUser(this.name),this.supportersService.completeCurrentStep(),this.router.navigate(["/hello-friend"]))}static \u0275fac=function(t){return new(t||n)(o(de),o(ce))};static \u0275cmp=ne({type:n,selectors:[["app-welcome"]],decls:8,vars:4,consts:[[1,"glass-container"],["type","text","placeholder","Name",3,"ngModelChange","ngModel"],[3,"click","disabled"]],template:function(t,i){t&1&&(_(0,"div",0)(1,"h1"),w(2,"Welcome"),v(),_(3,"p"),w(4,"Welcome to join the 2024 IDPwD event. Please enter your name to continue."),v(),_(5,"input",1),ae("ngModelChange",function(s){return se(i.name,s)||(i.name=s),s}),v(),_(6,"button",2),F("click",function(){return i.enterGame()}),w(7,"Continue"),v()()),t&2&&(j(5),oe("ngModel",i.name),j(),E("disabled",!(i.name!=null&&i.name.length)),re("disabled",!(i.name!=null&&i.name.length)))},dependencies:[Ne,P,we,X],encapsulation:2})};export{Oe as WelcomeComponent};