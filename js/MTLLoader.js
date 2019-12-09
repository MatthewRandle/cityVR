THREE.MTLLoader = function (a) { THREE.Loader.call(this, a) }, THREE.MTLLoader.prototype = Object.assign(Object.create(THREE.Loader.prototype), { constructor: THREE.MTLLoader, load: function (a, t, r, e) { var s = this, i = "" === this.path ? THREE.LoaderUtils.extractUrlBase(a) : this.path, o = new THREE.FileLoader(this.manager); o.setPath(this.path), o.load(a, function (a) { t(s.parse(a, i)) }, r, e) }, setMaterialOptions: function (a) { return this.materialOptions = a, this }, parse: function (a, t) { for (var r = a.split("\n"), e = {}, s = /\s+/, i = {}, o = 0; o < r.length; o++) { var n = r[o]; if (0 !== (n = n.trim()).length && "#" !== n.charAt(0)) { var p = n.indexOf(" "), l = 0 <= p ? n.substring(0, p) : n; l = l.toLowerCase(); var h = 0 <= p ? n.substring(p + 1) : ""; if (h = h.trim(), "newmtl" === l) e = { name: h }, i[h] = e; else if ("ka" === l || "kd" === l || "ks" === l || "ke" === l) { var c = h.split(s, 3); e[l] = [parseFloat(c[0]), parseFloat(c[1]), parseFloat(c[2])] } else e[l] = h } } var m = new THREE.MTLLoader.MaterialCreator(this.resourcePath || t, this.materialOptions); return m.setCrossOrigin(this.crossOrigin), m.setManager(this.manager), m.setMaterials(i), m } }), THREE.MTLLoader.MaterialCreator = function (a, t) { this.baseUrl = a || "", this.options = t, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide, this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping }, THREE.MTLLoader.MaterialCreator.prototype = { constructor: THREE.MTLLoader.MaterialCreator, crossOrigin: "anonymous", setCrossOrigin: function (a) { return this.crossOrigin = a, this }, setManager: function (a) { this.manager = a }, setMaterials: function (a) { this.materialsInfo = this.convert(a), this.materials = {}, this.materialsArray = [], this.nameLookup = {} }, convert: function (a) { if (!this.options) return a; var t = {}; for (var r in a) { var e = a[r], s = {}; for (var i in t[r] = s, e) { var o = !0, n = e[i], p = i.toLowerCase(); switch (p) { case "kd": case "ka": case "ks": this.options && this.options.normalizeRGB && (n = [n[0] / 255, n[1] / 255, n[2] / 255]), this.options && this.options.ignoreZeroRGBs && 0 === n[0] && 0 === n[1] && 0 === n[2] && (o = !1) }o && (s[p] = n) } } return t }, preload: function () { for (var a in this.materialsInfo) this.create(a) }, getIndex: function (a) { return this.nameLookup[a] }, getAsArray: function () { var a = 0; for (var t in this.materialsInfo) this.materialsArray[a] = this.create(t), this.nameLookup[t] = a, a++; return this.materialsArray }, create: function (a) { return void 0 === this.materials[a] && this.createMaterial_(a), this.materials[a] }, createMaterial_: function (a) { var o = this, t = this.materialsInfo[a], n = { name: a, side: this.side }; function r(a, t) { if (!n[a]) { var r, e, s = o.getTextureParams(t, n), i = o.loadTexture((r = o.baseUrl, "string" != typeof (e = s.url) || "" === e ? "" : /^https?:\/\//i.test(e) ? e : r + e)); i.repeat.copy(s.scale), i.offset.copy(s.offset), i.wrapS = o.wrap, i.wrapT = o.wrap, n[a] = i } } for (var e in t) { var s, i = t[e]; if ("" !== i) switch (e.toLowerCase()) { case "kd": n.color = (new THREE.Color).fromArray(i); break; case "ks": n.specular = (new THREE.Color).fromArray(i); break; case "ke": n.emissive = (new THREE.Color).fromArray(i); break; case "map_kd": r("map", i); break; case "map_ks": r("specularMap", i); break; case "map_ke": r("emissiveMap", i); break; case "norm": r("normalMap", i); break; case "map_bump": case "bump": r("bumpMap", i); break; case "map_d": r("alphaMap", i), n.transparent = !0; break; case "ns": n.shininess = parseFloat(i); break; case "d": (s = parseFloat(i)) < 1 && (n.opacity = s, n.transparent = !0); break; case "tr": s = parseFloat(i), this.options && this.options.invertTrProperty && (s = 1 - s), 0 < s && (n.opacity = 1 - s, n.transparent = !0) } } return this.materials[a] = new THREE.MeshPhongMaterial(n), this.materials[a] }, getTextureParams: function (a, t) { var r, e = { scale: new THREE.Vector2(1, 1), offset: new THREE.Vector2(0, 0) }, s = a.split(/\s+/); return 0 <= (r = s.indexOf("-bm")) && (t.bumpScale = parseFloat(s[r + 1]), s.splice(r, 2)), 0 <= (r = s.indexOf("-s")) && (e.scale.set(parseFloat(s[r + 1]), parseFloat(s[r + 2])), s.splice(r, 4)), 0 <= (r = s.indexOf("-o")) && (e.offset.set(parseFloat(s[r + 1]), parseFloat(s[r + 2])), s.splice(r, 4)), e.url = s.join(" ").trim(), e }, loadTexture: function (a, t, r, e, s) { var i, o = void 0 !== this.manager ? this.manager : THREE.DefaultLoadingManager, n = o.getHandler(a); return null === n && (n = new THREE.TextureLoader(o)), n.setCrossOrigin && n.setCrossOrigin(this.crossOrigin), i = n.load(a, r, e, s), void 0 !== t && (i.mapping = t), i } };