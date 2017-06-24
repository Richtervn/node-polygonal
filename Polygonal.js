(function($hx_exports) {
  "use strict";
  var $hxClasses = {},
    $estr = function() {
      return js.Boot.__string_rec(this, ''); };

  function $extend(from, fields) {
    function Inherit() {}
    Inherit.prototype = from;
    var proto = new Inherit();
    for (var name in fields) proto[name] = fields[name];
    if (fields.toString !== Object.prototype.toString) proto.toString = fields.toString;
    return proto;
  }
  var HxOverrides = function() {};
  $hxClasses["HxOverrides"] = HxOverrides;
  HxOverrides.__name__ = ["HxOverrides"];
  HxOverrides.dateStr = function(date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
  };
  HxOverrides.strDate = function(s) {
    var _g = s.length;
    switch (_g) {
      case 8:
        var k = s.split(":");
        var d = new Date();
        d.setTime(0);
        d.setUTCHours(k[0]);
        d.setUTCMinutes(k[1]);
        d.setUTCSeconds(k[2]);
        return d;
      case 10:
        var k1 = s.split("-");
        return new Date(k1[0], k1[1] - 1, k1[2], 0, 0, 0);
      case 19:
        var k2 = s.split(" ");
        var y = k2[0].split("-");
        var t = k2[1].split(":");
        return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
      default:
        throw "Invalid date format : " + s;
    }
  };
  HxOverrides.cca = function(s, index) {
    var x = s.charCodeAt(index);
    if (x != x) return undefined;
    return x;
  };
  HxOverrides.substr = function(s, pos, len) {
    if (pos != null && pos != 0 && len != null && len < 0) return "";
    if (len == null) len = s.length;
    if (pos < 0) {
      pos = s.length + pos;
      if (pos < 0) pos = 0;
    } else if (len < 0) len = s.length + len - pos;
    return s.substr(pos, len);
  };
  HxOverrides.indexOf = function(a, obj, i) {
    var len = a.length;
    if (i < 0) {
      i += len;
      if (i < 0) i = 0;
    }
    while (i < len) {
      if (a[i] === obj) return i;
      i++;
    }
    return -1;
  };
  HxOverrides.lastIndexOf = function(a, obj, i) {
    var len = a.length;
    if (i >= len) i = len - 1;
    else if (i < 0) i += len;
    while (i >= 0) {
      if (a[i] === obj) return i;
      i--;
    }
    return -1;
  };
  HxOverrides.remove = function(a, obj) {
    var i = HxOverrides.indexOf(a, obj, 0);
    if (i == -1) return false;
    a.splice(i, 1);
    return true;
  };
  HxOverrides.iter = function(a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function() {
        return this.cur < this.arr.length;
      },
      next: function() {
        return this.arr[this.cur++];
      }
    };
  };
  var IntIterator = function(min, max) {
    this.min = min;
    this.max = max;
  };
  $hxClasses["IntIterator"] = IntIterator;
  IntIterator.__name__ = ["IntIterator"];
  IntIterator.prototype = {
    min: null,
    max: null,
    hasNext: function() {
      return this.min < this.max;
    },
    next: function() {
      return this.min++;
    },
    __class__: IntIterator
  };
  var Polygonal = $hx_exports.Polygonal = function() {};
  $hxClasses["Polygonal"] = Polygonal;
  Polygonal.__name__ = ["Polygonal"];
  Polygonal.getLib = function() {
    var obj = { DA: de.polygonal.ds.DA, Graph: de.polygonal.ds.Graph, GraphNode: de.polygonal.ds.GraphNode, AStar: de.polygonal.ai.pathfinding.AStar, AStarWaypoint: de.polygonal.ai.pathfinding.AStarWaypoint };
    return obj;
  };
  var _Map = {};
  _Map.Map_Impl_ = function() {};
  $hxClasses["_Map.Map_Impl_"] = _Map.Map_Impl_;
  _Map.Map_Impl_.__name__ = ["_Map", "Map_Impl_"];
  _Map.Map_Impl_._new = null;
  _Map.Map_Impl_.set = function(this1, key, value) {
    this1.set(key, value);
  };
  _Map.Map_Impl_.get = function(this1, key) {
    return this1.get(key);
  };
  _Map.Map_Impl_.exists = function(this1, key) {
    return this1.exists(key);
  };
  _Map.Map_Impl_.remove = function(this1, key) {
    return this1.remove(key);
  };
  _Map.Map_Impl_.keys = function(this1) {
    return this1.keys();
  };
  _Map.Map_Impl_.iterator = function(this1) {
    return this1.iterator();
  };
  _Map.Map_Impl_.toString = function(this1) {
    return this1.toString();
  };
  _Map.Map_Impl_.arrayWrite = function(this1, k, v) {
    this1.set(k, v);
    return v;
  };
  _Map.Map_Impl_.toStringMap = function(t) {
    return new haxe.ds.StringMap();
  };
  _Map.Map_Impl_.toIntMap = function(t) {
    return new haxe.ds.IntMap();
  };
  _Map.Map_Impl_.toEnumValueMapMap = function(t) {
    return new haxe.ds.EnumValueMap();
  };
  _Map.Map_Impl_.toObjectMap = function(t) {
    return new haxe.ds.ObjectMap();
  };
  _Map.Map_Impl_.fromStringMap = function(map) {
    return map;
  };
  _Map.Map_Impl_.fromIntMap = function(map) {
    return map;
  };
  _Map.Map_Impl_.fromObjectMap = function(map) {
    return map;
  };
  var IMap = function() {};
  $hxClasses["IMap"] = IMap;
  IMap.__name__ = ["IMap"];
  IMap.prototype = {
    get: null,
    set: null,
    exists: null,
    remove: null,
    keys: null,
    iterator: null,
    toString: null,
    __class__: IMap
  };
  Math.__name__ = ["Math"];
  var Reflect = function() {};
  $hxClasses["Reflect"] = Reflect;
  Reflect.__name__ = ["Reflect"];
  Reflect.hasField = function(o, field) {
    return Object.prototype.hasOwnProperty.call(o, field);
  };
  Reflect.field = function(o, field) {
    try {
      return o[field];
    } catch (e) {
      return null;
    }
  };
  Reflect.setField = function(o, field, value) {
    o[field] = value;
  };
  Reflect.getProperty = function(o, field) {
    var tmp;
    if (o == null) return null;
    else if (o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp]();
    else return o[field];
  };
  Reflect.setProperty = function(o, field, value) {
    var tmp;
    if (o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value);
    else o[field] = value;
  };
  Reflect.callMethod = function(o, func, args) {
    return func.apply(o, args);
  };
  Reflect.fields = function(o) {
    var a = [];
    if (o != null) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var f in o) {
        if (f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o, f)) a.push(f);
      }
    }
    return a;
  };
  Reflect.isFunction = function(f) {
    return typeof(f) == "function" && !(f.__name__ || f.__ename__);
  };
  Reflect.compare = function(a, b) {
    if (a == b) return 0;
    else if (a > b) return 1;
    else return -1;
  };
  Reflect.compareMethods = function(f1, f2) {
    if (f1 == f2) return true;
    if (!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
    return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
  };
  Reflect.isObject = function(v) {
    if (v == null) return false;
    var t = typeof(v);
    return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
  };
  Reflect.isEnumValue = function(v) {
    return v != null && v.__enum__ != null;
  };
  Reflect.deleteField = function(o, field) {
    if (!Object.prototype.hasOwnProperty.call(o, field)) return false;
    delete(o[field]);
    return true;
  };
  Reflect.copy = function(o) {
    var o2 = {};
    var _g = 0;
    var _g1 = Reflect.fields(o);
    while (_g < _g1.length) {
      var f = _g1[_g];
      ++_g;
      Reflect.setField(o2, f, Reflect.field(o, f));
    }
    return o2;
  };
  Reflect.makeVarArgs = function(f) {
    return function() {
      var a = Array.prototype.slice.call(arguments);
      return f(a);
    };
  };
  var Std = function() {};
  $hxClasses["Std"] = Std;
  Std.__name__ = ["Std"];
  Std["is"] = function(v, t) {
    return js.Boot.__instanceof(v, t);
  };
  Std.instance = function(value, c) {
    if ((value instanceof c)) return value;
    else return null;
  };
  Std.string = function(s) {
    return js.Boot.__string_rec(s, "");
  };
  Std["int"] = function(x) {
    return x | 0;
  };
  Std.parseInt = function(x) {
    var v = parseInt(x, 10);
    if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
    if (isNaN(v)) return null;
    return v;
  };
  Std.parseFloat = function(x) {
    return parseFloat(x);
  };
  Std.random = function(x) {
    if (x <= 0) return 0;
    else return Math.floor(Math.random() * x);
  };
  var StringBuf = function() {
    this.b = "";
  };
  $hxClasses["StringBuf"] = StringBuf;
  StringBuf.__name__ = ["StringBuf"];
  StringBuf.prototype = {
    b: null,
    get_length: function() {
      return this.b.length;
    },
    add: function(x) {
      this.b += Std.string(x);
    },
    addChar: function(c) {
      this.b += String.fromCharCode(c);
    },
    addSub: function(s, pos, len) {
      if (len == null) this.b += HxOverrides.substr(s, pos, null);
      else this.b += HxOverrides.substr(s, pos, len);
    },
    toString: function() {
      return this.b;
    },
    __class__: StringBuf,
    __properties__: { get_length: "get_length" }
  };
  var StringTools = function() {};
  $hxClasses["StringTools"] = StringTools;
  StringTools.__name__ = ["StringTools"];
  StringTools.urlEncode = function(s) {
    return encodeURIComponent(s);
  };
  StringTools.urlDecode = function(s) {
    return decodeURIComponent(s.split("+").join(" "));
  };
  StringTools.htmlEscape = function(s, quotes) {
    s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    if (quotes) return s.split("\"").join("&quot;").split("'").join("&#039;");
    else return s;
  };
  StringTools.htmlUnescape = function(s) {
    return s.split("&gt;").join(">").split("&lt;").join("<").split("&quot;").join("\"").split("&#039;").join("'").split("&amp;").join("&");
  };
  StringTools.startsWith = function(s, start) {
    return s.length >= start.length && HxOverrides.substr(s, 0, start.length) == start;
  };
  StringTools.endsWith = function(s, end) {
    var elen = end.length;
    var slen = s.length;
    return slen >= elen && HxOverrides.substr(s, slen - elen, elen) == end;
  };
  StringTools.isSpace = function(s, pos) {
    var c = HxOverrides.cca(s, pos);
    return c > 8 && c < 14 || c == 32;
  };
  StringTools.ltrim = function(s) {
    var l = s.length;
    var r = 0;
    while (r < l && StringTools.isSpace(s, r)) r++;
    if (r > 0) return HxOverrides.substr(s, r, l - r);
    else return s;
  };
  StringTools.rtrim = function(s) {
    var l = s.length;
    var r = 0;
    while (r < l && StringTools.isSpace(s, l - r - 1)) r++;
    if (r > 0) return HxOverrides.substr(s, 0, l - r);
    else return s;
  };
  StringTools.trim = function(s) {
    return StringTools.ltrim(StringTools.rtrim(s));
  };
  StringTools.lpad = function(s, c, l) {
    if (c.length <= 0) return s;
    while (s.length < l) s = c + s;
    return s;
  };
  StringTools.rpad = function(s, c, l) {
    if (c.length <= 0) return s;
    while (s.length < l) s = s + c;
    return s;
  };
  StringTools.replace = function(s, sub, by) {
    return s.split(sub).join(by);
  };
  StringTools.hex = function(n, digits) {
    var s = "";
    var hexChars = "0123456789ABCDEF";
    do {
      s = hexChars.charAt(n & 15) + s;
      n >>>= 4;
    } while (n > 0);
    if (digits != null)
      while (s.length < digits) s = "0" + s;
    return s;
  };
  StringTools.fastCodeAt = function(s, index) {
    return s.charCodeAt(index);
  };
  StringTools.isEof = function(c) {
    return c != c;
  };
  var ValueType = $hxClasses["ValueType"] = { __ename__: ["ValueType"], __constructs__: ["TNull", "TInt", "TFloat", "TBool", "TObject", "TFunction", "TClass", "TEnum", "TUnknown"] };
  ValueType.TNull = ["TNull", 0];
  ValueType.TNull.toString = $estr;
  ValueType.TNull.__enum__ = ValueType;
  ValueType.TInt = ["TInt", 1];
  ValueType.TInt.toString = $estr;
  ValueType.TInt.__enum__ = ValueType;
  ValueType.TFloat = ["TFloat", 2];
  ValueType.TFloat.toString = $estr;
  ValueType.TFloat.__enum__ = ValueType;
  ValueType.TBool = ["TBool", 3];
  ValueType.TBool.toString = $estr;
  ValueType.TBool.__enum__ = ValueType;
  ValueType.TObject = ["TObject", 4];
  ValueType.TObject.toString = $estr;
  ValueType.TObject.__enum__ = ValueType;
  ValueType.TFunction = ["TFunction", 5];
  ValueType.TFunction.toString = $estr;
  ValueType.TFunction.__enum__ = ValueType;
  ValueType.TClass = function(c) {
    var $x = ["TClass", 6, c];
    $x.__enum__ = ValueType;
    $x.toString = $estr;
    return $x; };
  ValueType.TEnum = function(e) {
    var $x = ["TEnum", 7, e];
    $x.__enum__ = ValueType;
    $x.toString = $estr;
    return $x; };
  ValueType.TUnknown = ["TUnknown", 8];
  ValueType.TUnknown.toString = $estr;
  ValueType.TUnknown.__enum__ = ValueType;
  ValueType.__empty_constructs__ = [ValueType.TNull, ValueType.TInt, ValueType.TFloat, ValueType.TBool, ValueType.TObject, ValueType.TFunction, ValueType.TUnknown];
  var Type = function() {};
  $hxClasses["Type"] = Type;
  Type.__name__ = ["Type"];
  Type.getClass = function(o) {
    if (o == null) return null;
    if ((o instanceof Array) && o.__enum__ == null) return Array;
    else return o.__class__;
  };
  Type.getEnum = function(o) {
    if (o == null) return null;
    return o.__enum__;
  };
  Type.getSuperClass = function(c) {
    return c.__super__;
  };
  Type.getClassName = function(c) {
    var a = c.__name__;
    return a.join(".");
  };
  Type.getEnumName = function(e) {
    var a = e.__ename__;
    return a.join(".");
  };
  Type.resolveClass = function(name) {
    var cl = $hxClasses[name];
    if (cl == null || !cl.__name__) return null;
    return cl;
  };
  Type.resolveEnum = function(name) {
    var e = $hxClasses[name];
    if (e == null || !e.__ename__) return null;
    return e;
  };
  Type.createInstance = function(cl, args) {
    var _g = args.length;
    switch (_g) {
      case 0:
        return new cl();
      case 1:
        return new cl(args[0]);
      case 2:
        return new cl(args[0], args[1]);
      case 3:
        return new cl(args[0], args[1], args[2]);
      case 4:
        return new cl(args[0], args[1], args[2], args[3]);
      case 5:
        return new cl(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new cl(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new cl(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      case 8:
        return new cl(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
      default:
        throw "Too many arguments";
    }
    return null;
  };
  Type.createEmptyInstance = function(cl) {
    function empty() {};
    empty.prototype = cl.prototype;
    return new empty();
  };
  Type.createEnum = function(e, constr, params) {
    var f = Reflect.field(e, constr);
    if (f == null) throw "No such constructor " + constr;
    if (Reflect.isFunction(f)) {
      if (params == null) throw "Constructor " + constr + " need parameters";
      return f.apply(e, params);
    }
    if (params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
    return f;
  };
  Type.createEnumIndex = function(e, index, params) {
    var c = e.__constructs__[index];
    if (c == null) throw index + " is not a valid enum constructor index";
    return Type.createEnum(e, c, params);
  };
  Type.getInstanceFields = function(c) {
    var a = [];
    for (var i in c.prototype) a.push(i);
    HxOverrides.remove(a, "__class__");
    HxOverrides.remove(a, "__properties__");
    return a;
  };
  Type.getClassFields = function(c) {
    var a = Reflect.fields(c);
    HxOverrides.remove(a, "__name__");
    HxOverrides.remove(a, "__interfaces__");
    HxOverrides.remove(a, "__properties__");
    HxOverrides.remove(a, "__super__");
    HxOverrides.remove(a, "prototype");
    return a;
  };
  Type.getEnumConstructs = function(e) {
    var a = e.__constructs__;
    return a.slice();
  };
  Type["typeof"] = function(v) {
    var _g = typeof(v);
    switch (_g) {
      case "boolean":
        return ValueType.TBool;
      case "string":
        return ValueType.TClass(String);
      case "number":
        if (Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
        return ValueType.TFloat;
      case "object":
        if (v == null) return ValueType.TNull;
        var e = v.__enum__;
        if (e != null) return ValueType.TEnum(e);
        var c;
        if ((v instanceof Array) && v.__enum__ == null) c = Array;
        else c = v.__class__;
        if (c != null) return ValueType.TClass(c);
        return ValueType.TObject;
      case "function":
        if (v.__name__ || v.__ename__) return ValueType.TObject;
        return ValueType.TFunction;
      case "undefined":
        return ValueType.TNull;
      default:
        return ValueType.TUnknown;
    }
  };
  Type.enumEq = function(a, b) {
    if (a == b) return true;
    try {
      if (a[0] != b[0]) return false;
      var _g1 = 2;
      var _g = a.length;
      while (_g1 < _g) {
        var i = _g1++;
        if (!Type.enumEq(a[i], b[i])) return false;
      }
      var e = a.__enum__;
      if (e != b.__enum__ || e == null) return false;
    } catch (e1) {
      return false;
    }
    return true;
  };
  Type.enumConstructor = function(e) {
    return e[0];
  };
  Type.enumParameters = function(e) {
    return e.slice(2);
  };
  Type.enumIndex = function(e) {
    return e[1];
  };
  Type.allEnums = function(e) {
    return e.__empty_constructs__;
  };
  var de = {};
  de.polygonal = {};
  de.polygonal.Printf = function() {};
  $hxClasses["de.polygonal.Printf"] = de.polygonal.Printf;
  de.polygonal.Printf.__name__ = ["de", "polygonal", "Printf"];
  de.polygonal.Printf.dataTypeMap = null;
  de.polygonal.Printf.formatIntFuncHash = null;
  de.polygonal.Printf.formatFloatFuncHash = null;
  de.polygonal.Printf.formatStringFuncHash = null;
  de.polygonal.Printf.init = function() {
    de.polygonal.Printf.dataTypeMap = de.polygonal.Printf.makeDataTypeMap();
    de.polygonal.Printf.formatIntFuncHash = new haxe.ds.IntMap();
    de.polygonal.Printf.formatIntFuncHash.set(1, de.polygonal.Printf.formatSignedDecimal);
    de.polygonal.Printf.formatIntFuncHash.set(2, de.polygonal.Printf.formatUnsignedDecimal);
    de.polygonal.Printf.formatIntFuncHash.set(0, de.polygonal.Printf.formatCharacter);
    de.polygonal.Printf.formatIntFuncHash.set(4, de.polygonal.Printf.formatHexadecimal);
    de.polygonal.Printf.formatIntFuncHash.set(3, de.polygonal.Printf.formatOctal);
    de.polygonal.Printf.formatIntFuncHash.set(5, de.polygonal.Printf.formatBinary);
    de.polygonal.Printf.formatFloatFuncHash = new haxe.ds.IntMap();
    de.polygonal.Printf.formatFloatFuncHash.set(0, de.polygonal.Printf.formatNormalFloat);
    de.polygonal.Printf.formatFloatFuncHash.set(1, de.polygonal.Printf.formatScientific);
    de.polygonal.Printf.formatFloatFuncHash.set(2, de.polygonal.Printf.formatNaturalFloat);
    de.polygonal.Printf.formatStringFuncHash = new haxe.ds.IntMap();
    de.polygonal.Printf.formatStringFuncHash.set(2, de.polygonal.Printf.formatString);
  };
  de.polygonal.Printf.makeDataTypeMap = function() {
    var hash = new haxe.ds.IntMap();
    hash.set(105, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.ISignedDecimal));
    hash.set(100, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.ISignedDecimal));
    hash.set(117, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IUnsignedDecimal));
    hash.set(99, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.ICharacter));
    hash.set(120, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IHex));
    hash.set(88, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IHex));
    hash.set(111, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IOctal));
    hash.set(98, de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IBin));
    hash.set(102, de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FNormal));
    hash.set(101, de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FScientific));
    hash.set(69, de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FScientific));
    hash.set(103, de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FNatural));
    hash.set(71, de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FNatural));
    hash.set(115, de.polygonal._Printf.FormatDataType.FmtString);
    hash.set(112, de.polygonal._Printf.FormatDataType.FmtPointer);
    hash.set(110, de.polygonal._Printf.FormatDataType.FmtNothing);
    return hash;
  };
  de.polygonal.Printf.format = function(fmt, args) {
    if (!de.polygonal.Printf._initialized) {
      de.polygonal.Printf._initialized = true;
      de.polygonal.Printf.init();
    }
    var _g1 = 0;
    var _g = args.length;
    while (_g1 < _g) {
      var i = _g1++;
      if (args[i] == null) args[i] = "null";
    }
    var output = "";
    var argIndex = 0;
    var tokens = de.polygonal.Printf.tokenize(fmt);
    var _g2 = 0;
    while (_g2 < tokens.length) {
      var token = tokens[_g2];
      ++_g2;
      switch (token[1]) {
        case 3:
          throw "invalid format specifier";
          break;
        case 0:
          var str = token[2];
          output += str;
          break;
        case 2:
          var name = token[2];
          if (!Object.prototype.hasOwnProperty.call(args[0], name)) throw "no field named " + name;
          output += Std.string(Reflect.field(args[0], name));
          break;
        case 1:
          var tagArgs = token[3];
          var type = token[2];
          if (tagArgs.width != null) tagArgs.width = tagArgs.width;
          else tagArgs.width = js.Boot.__cast(args[argIndex++], Int);
          if (tagArgs.precision != null) tagArgs.precision = tagArgs.precision;
          else tagArgs.precision = js.Boot.__cast(args[argIndex++], Int);
          var value = args[argIndex++];
          var formatFunction;
          switch (type[1]) {
            case 1:
              var floatType = type[2];
              formatFunction = de.polygonal.Printf.formatFloatFuncHash.get(floatType[1]);
              break;
            case 0:
              var integerType = type[2];
              formatFunction = de.polygonal.Printf.formatIntFuncHash.get(integerType[1]);
              break;
            case 2:
              formatFunction = de.polygonal.Printf.formatStringFuncHash.get(2);
              break;
            case 3:
              throw "specifier 'p' is not supported";
              break;
            case 4:
              throw "specifier 'n' is not supported";
              break;
          }
          output += formatFunction(value, tagArgs);
          break;
      }
    }
    return output;
  };
  de.polygonal.Printf.tokenize = function(fmt) {
    var length = fmt.length;
    var lastStr = new StringBuf();
    var i = 0;
    var c = 0;
    var tokens = new Array();
    while (i < length) {
      var c1 = de.polygonal.Printf.codeAt(fmt, i++);
      if (c1 == 37) {
        c1 = de.polygonal.Printf.codeAt(fmt, i++);
        if (c1 == 37) lastStr.b += String.fromCharCode(c1);
        else {
          if (lastStr.b.length > 0) {
            tokens.push(de.polygonal._Printf.FormatToken.BareString(lastStr.b));
            lastStr = new StringBuf();
          }
          var token;
          if (c1 == 40) {
            var endPos = fmt.indexOf(")", i);
            if (endPos == -1) token = de.polygonal._Printf.FormatToken.Unknown("named param", i);
            else {
              var paramName = HxOverrides.substr(fmt, i, endPos - i);
              i = endPos + 1;
              token = de.polygonal._Printf.FormatToken.Property(paramName);
            }
          } else {
            var params = { flags: 0, pos: -1, width: -1, precision: -1 };
            while (c1 == 45 || c1 == 43 || c1 == 35 || c1 == 48 || c1 == 32) {
              if (c1 == 45) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Minus[1];
              else if (c1 == 43) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Plus[1];
              else if (c1 == 35) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Sharp[1];
              else if (c1 == 48) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Zero[1];
              else if (c1 == 32) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Space[1];
              c1 = de.polygonal.Printf.codeAt(fmt, i++);
            }
            if ((params.flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0 && (params.flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) params.flags &= 268435455 - (1 << de.polygonal._Printf.FormatFlags.Zero[1]);
            if ((params.flags & 1 << de.polygonal._Printf.FormatFlags.Space[1]) != 0 && (params.flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0) params.flags &= 268435455 - (1 << de.polygonal._Printf.FormatFlags.Space[1]);
            if (c1 == 42) {
              params.width = null;
              c1 = de.polygonal.Printf.codeAt(fmt, i++);
            } else if (c1 >= 48 && c1 <= 57) {
              params.width = 0;
              while (c1 >= 48 && c1 <= 57) {
                params.width = c1 - 48 + params.width * 10;
                c1 = de.polygonal.Printf.codeAt(fmt, i++);
              }
              if (c1 == 36) {
                params.pos = params.width - 1;
                params.width = -1;
                c1 = de.polygonal.Printf.codeAt(fmt, i++);
                if (c1 == 42) {
                  params.width = null;
                  c1 = de.polygonal.Printf.codeAt(fmt, i++);
                } else if (c1 >= 48 && c1 <= 57) {
                  params.width = 0;
                  while (c1 >= 48 && c1 <= 57) {
                    params.width = c1 - 48 + params.width * 10;
                    c1 = de.polygonal.Printf.codeAt(fmt, i++);
                  }
                }
              }
            }
            if (c1 == 46) {
              c1 = de.polygonal.Printf.codeAt(fmt, i++);
              if (c1 == 42) {
                params.precision = null;
                c1 = de.polygonal.Printf.codeAt(fmt, i++);
              } else if (c1 >= 48 && c1 <= 57) {
                params.precision = 0;
                while (c1 >= 48 && c1 <= 57) {
                  params.precision = c1 - 48 + params.precision * 10;
                  c1 = de.polygonal.Printf.codeAt(fmt, i++);
                }
              } else params.precision = 0;
            }
            while (c1 == 104 || c1 == 108 || c1 == 76) {
              switch (c1) {
                case 104:
                  params.flags |= 1 << de.polygonal._Printf.FormatFlags.LengthH[1];
                  break;
                case 108:
                  params.flags |= 1 << de.polygonal._Printf.FormatFlags.Lengthl[1];
                  break;
                case 76:
                  params.flags |= 1 << de.polygonal._Printf.FormatFlags.LengthL[1];
                  break;
              }
              c1 = de.polygonal.Printf.codeAt(fmt, i++);
            }
            if (c1 == 69 || c1 == 71 || c1 == 88) params.flags |= 1 << de.polygonal._Printf.FormatFlags.UpperCase[1];
            var type = de.polygonal.Printf.dataTypeMap.get(c1);
            if (type == null) token = de.polygonal._Printf.FormatToken.Unknown(String.fromCharCode(c1), i);
            else token = de.polygonal._Printf.FormatToken.Tag(type, params);
          }
          tokens.push(token);
        }
      } else lastStr.b += String.fromCharCode(c1);
    }
    if (lastStr.b.length > 0) tokens.push(de.polygonal._Printf.FormatToken.BareString(lastStr.b));
    return tokens;
  };
  de.polygonal.Printf.formatBinary = function(value, args) {
    var output = "";
    var flags = args.flags;
    var precision = args.precision;
    var width = args.width;
    if (precision == -1) precision = 1;
    if (value != 0) {
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
      var i = value;
      do {
        output = ((i & 1) > 0 ? "1" : "0") + output;
        i >>>= 1;
      } while (i > 0);
      if (precision > 1) {
        if (precision > output.length) output = de.polygonal.Printf.lpad(output, "0", precision);
        if ((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) output = "b" + output;
      }
    }
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) {
      if (width > output.length) return de.polygonal.Printf.rpad(output, " ", width);
      else return output;
    } else if (width > output.length) return de.polygonal.Printf.lpad(output, (flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0 ? "0" : " ", width);
    else return output;
  };
  de.polygonal.Printf.formatOctal = function(value, args) {
    var output = "";
    var flags = args.flags;
    var precision = args.precision;
    var width = args.width;
    if (precision == -1) precision = 1;
    if (value != 0) {
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
      output = de.polygonal.Printf.toOct(value);
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) output = "0" + output;
      if (precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output, "0", precision);
    }
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) {
      if (width > output.length) return de.polygonal.Printf.rpad(output, " ", width);
      else return output;
    } else if (width > output.length) return de.polygonal.Printf.lpad(output, (flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0 ? "0" : " ", width);
    else return output;
  };
  de.polygonal.Printf.formatHexadecimal = function(value, args) {
    var output = "";
    var flags = args.flags;
    var precision = args.precision;
    var width = args.width;
    if (precision == -1) precision = 1;
    if (value != 0) {
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
      output = de.polygonal.Printf.toHex(value);
      if (precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output, "0", precision);
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0 && value != 0) output = "0x" + output;
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.UpperCase[1]) != 0) output = output.toUpperCase();
      else output = output.toLowerCase();
    }
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) {
      if (width > output.length) return de.polygonal.Printf.rpad(output, " ", width);
      else return output;
    } else if (width > output.length) return de.polygonal.Printf.lpad(output, (flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0 ? "0" : " ", width);
    else return output;
  };
  de.polygonal.Printf.formatUnsignedDecimal = function(value, args) {
    var output;
    var precision = args.precision;
    if (value >= 0) output = de.polygonal.Printf.formatSignedDecimal(value, args);
    else {
      var x = new haxe.Int64(0, value);
      output = x.toString();
      if (precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output, "0", precision);
      output = de.polygonal.Printf.padNumber(output, value, args.flags, args.width);
    }
    return output;
  };
  de.polygonal.Printf.formatNaturalFloat = function(value, args) {
    args.precision = 0;
    var formatedFloat = de.polygonal.Printf.formatNormalFloat(value, args);
    var formatedScientific = de.polygonal.Printf.formatScientific(value, args);
    if ((args.flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) {
      if (formatedFloat.indexOf(".") != -1) {
        var pos = formatedFloat.length - 1;
        while (formatedFloat.charCodeAt(pos) == 48) pos--;
        formatedFloat = HxOverrides.substr(formatedFloat, 0, pos);
      }
    }
    if (formatedFloat.length <= formatedScientific.length) return formatedFloat;
    else return formatedScientific;
  };
  de.polygonal.Printf.formatScientific = function(value, args) {
    var output = "";
    var flags = args.flags;
    var precision = args.precision;
    if (precision == -1) precision = 6;
    var sign;
    var exponent;
    if (value == 0) {
      sign = 0;
      exponent = 0;
      output += "0";
      if (precision > 0) {
        output += ".";
        var _g = 0;
        while (_g < precision) {
          var i = _g++;
          output += "0";
        }
      }
    } else {
      if (value > 0.) sign = 1;
      else if (value < 0.) sign = -1;
      else sign = 0;
      value = Math.abs(value);
      exponent = Math.floor(Math.log(value) / 2.302585092994046);
      value = value / Math.pow(10, exponent);
      var p = Math.pow(0.1, precision);
      value = Math.round(value / p) * p;
    }
    if (sign < 0) output += "-";
    else if ((flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0) output += "+";
    else output += "";
    if (value != 0) output += de.polygonal.Printf.rpad((function($this) {
      var $r;
      var _this = de.polygonal.Printf.str(value);
      $r = HxOverrides.substr(_this, 0, precision + 2);
      return $r;
    }(this)), "0", precision + 2);
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.UpperCase[1]) != 0) output += "E";
    else output += "e";
    if (exponent >= 0) output += "+";
    else output += "-";
    if (exponent < 10) output += "00";
    else if (exponent < 100) output += "0";
    output += de.polygonal.Printf.str(de.polygonal.Printf.iabs(exponent));
    return output;
  };
  de.polygonal.Printf.formatSignedDecimal = function(value, args) {
    var output;
    var flags = args.flags;
    var precision = args.precision;
    var width = args.width;
    if (precision == 0 && value == 0) output = "";
    else {
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
      output = de.polygonal.Printf.str(de.polygonal.Printf.iabs(value));
      if (precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output, "0", precision);
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) output = de.polygonal.Printf.lpad(output, "0", value < 0 ? width - 1 : width);
      if (value < 0) output = "-" + output;
    }
    if (value >= 0) {
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0) output = "+" + output;
      else if ((flags & 1 << de.polygonal._Printf.FormatFlags.Space[1]) != 0) output = " " + output;
    }
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output, " ", args.width);
    else output = de.polygonal.Printf.lpad(output, " ", args.width);
    return output;
  };
  de.polygonal.Printf.formatString = function(x, args) {
    var output = x;
    var precision = args.precision;
    var width = args.width;
    if (precision > 0) output = HxOverrides.substr(x, 0, precision);
    var k = output.length;
    if (width > 0 && k < width) {
      if ((args.flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output, " ", width);
      else output = de.polygonal.Printf.lpad(output, " ", width);
    }
    return output;
  };
  de.polygonal.Printf.formatNormalFloat = function(value, args) {
    var output;
    var flags = args.flags;
    var precision = args.precision;
    var width = args.width;
    if (precision == -1) precision = 6;
    if (precision == 0) {
      output = de.polygonal.Printf.str(de.polygonal.Printf.iabs(Math.round(value)));
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) output += ".";
    } else {
      value = de.polygonal.Printf.roundTo(value, Math.pow(.1, precision));
      var decimalPlaces = precision;
      if (Math.isNaN(value)) output = "NaN";
      else {
        var t = Std["int"](Math.pow(10, decimalPlaces));
        output = de.polygonal.Printf.str((value * t | 0) / t);
        var i = output.indexOf(".");
        if (i != -1) {
          var _g = HxOverrides.substr(output, i + 1, null).length;
          while (_g < decimalPlaces) {
            var i1 = _g++;
            output += "0";
          }
        } else {
          output += ".";
          var _g1 = 0;
          while (_g1 < decimalPlaces) {
            var i2 = _g1++;
            output += "0";
          }
        }
      }
    }
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0 && value >= 0) output = "+" + output;
    else if ((flags & 1 << de.polygonal._Printf.FormatFlags.Space[1]) != 0 && value >= 0) output = " " + output;
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) output = de.polygonal.Printf.lpad(output, "0", value < 0 ? width - 1 : width);
    if ((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output, " ", width);
    else output = de.polygonal.Printf.lpad(output, " ", width);
    return output;
  };
  de.polygonal.Printf.formatCharacter = function(x, args) {
    var output = String.fromCharCode(x);
    if (args.width > 1) {
      if ((args.flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output, " ", args.width);
      else output = de.polygonal.Printf.lpad(output, " ", args.width);
    }
    return output;
  };
  de.polygonal.Printf.padNumber = function(x, n, flags, width) {
    var k = x.length;
    if (width > 0 && k < width) {
      if ((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) x = de.polygonal.Printf.rpad(x, " ", width);
      else if (n >= 0) x = de.polygonal.Printf.lpad(x, (flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0 ? "0" : " ", width);
      else if ((flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) x = "-" + de.polygonal.Printf.lpad(HxOverrides.substr(x, 1, null), "0", width);
      else x = de.polygonal.Printf.lpad(x, " ", width);
    }
    return x;
  };
  de.polygonal.Printf.lpad = function(s, c, l) {
    if (c.length <= 0) throw "c.length <= 0";
    while (s.length < l) s = c + s;
    return s;
  };
  de.polygonal.Printf.rpad = function(s, c, l) {
    if (c.length <= 0) throw "c.length <= 0";
    while (s.length < l) s = s + c;
    return s;
  };
  de.polygonal.Printf.toHex = function(x) {
    var s = "";
    var hexChars = "0123456789ABCDEF";
    do {
      s = hexChars.charAt(x & 15) + s;
      x >>>= 4;
    } while (x > 0);
    return s;
  };
  de.polygonal.Printf.toOct = function(x) {
    var s = "";
    var t = x;
    do {
      s = (t & 7) + s;
      t >>>= 3;
    } while (t > 0);
    return s;
  };
  de.polygonal.Printf.iabs = function(x) {
    return Std["int"](Math.abs(x));
  };
  de.polygonal.Printf.str = function(x) {
    return Std.string(x);
  };
  de.polygonal.Printf.codeAt = function(x, i) {
    return x.charCodeAt(i);
  };
  de.polygonal.Printf.isDigit = function(x) {
    return x >= 48 && x <= 57;
  };
  de.polygonal.Printf.roundTo = function(x, y) {
    return Math.round(x / y) * y;
  };
  de.polygonal._Printf = {};
  de.polygonal._Printf.FormatFlags = $hxClasses["de.polygonal._Printf.FormatFlags"] = { __ename__: ["de", "polygonal", "_Printf", "FormatFlags"], __constructs__: ["Minus", "Plus", "Space", "Sharp", "Zero", "LengthH", "LengthL", "Lengthl", "UpperCase"] };
  de.polygonal._Printf.FormatFlags.Minus = ["Minus", 0];
  de.polygonal._Printf.FormatFlags.Minus.toString = $estr;
  de.polygonal._Printf.FormatFlags.Minus.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.Plus = ["Plus", 1];
  de.polygonal._Printf.FormatFlags.Plus.toString = $estr;
  de.polygonal._Printf.FormatFlags.Plus.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.Space = ["Space", 2];
  de.polygonal._Printf.FormatFlags.Space.toString = $estr;
  de.polygonal._Printf.FormatFlags.Space.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.Sharp = ["Sharp", 3];
  de.polygonal._Printf.FormatFlags.Sharp.toString = $estr;
  de.polygonal._Printf.FormatFlags.Sharp.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.Zero = ["Zero", 4];
  de.polygonal._Printf.FormatFlags.Zero.toString = $estr;
  de.polygonal._Printf.FormatFlags.Zero.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.LengthH = ["LengthH", 5];
  de.polygonal._Printf.FormatFlags.LengthH.toString = $estr;
  de.polygonal._Printf.FormatFlags.LengthH.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.LengthL = ["LengthL", 6];
  de.polygonal._Printf.FormatFlags.LengthL.toString = $estr;
  de.polygonal._Printf.FormatFlags.LengthL.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.Lengthl = ["Lengthl", 7];
  de.polygonal._Printf.FormatFlags.Lengthl.toString = $estr;
  de.polygonal._Printf.FormatFlags.Lengthl.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.UpperCase = ["UpperCase", 8];
  de.polygonal._Printf.FormatFlags.UpperCase.toString = $estr;
  de.polygonal._Printf.FormatFlags.UpperCase.__enum__ = de.polygonal._Printf.FormatFlags;
  de.polygonal._Printf.FormatFlags.__empty_constructs__ = [de.polygonal._Printf.FormatFlags.Minus, de.polygonal._Printf.FormatFlags.Plus, de.polygonal._Printf.FormatFlags.Space, de.polygonal._Printf.FormatFlags.Sharp, de.polygonal._Printf.FormatFlags.Zero, de.polygonal._Printf.FormatFlags.LengthH, de.polygonal._Printf.FormatFlags.LengthL, de.polygonal._Printf.FormatFlags.Lengthl, de.polygonal._Printf.FormatFlags.UpperCase];
  de.polygonal._Printf.FormatToken = $hxClasses["de.polygonal._Printf.FormatToken"] = { __ename__: ["de", "polygonal", "_Printf", "FormatToken"], __constructs__: ["BareString", "Tag", "Property", "Unknown"] };
  de.polygonal._Printf.FormatToken.BareString = function(str) {
    var $x = ["BareString", 0, str];
    $x.__enum__ = de.polygonal._Printf.FormatToken;
    $x.toString = $estr;
    return $x; };
  de.polygonal._Printf.FormatToken.Tag = function(type, args) {
    var $x = ["Tag", 1, type, args];
    $x.__enum__ = de.polygonal._Printf.FormatToken;
    $x.toString = $estr;
    return $x; };
  de.polygonal._Printf.FormatToken.Property = function(name) {
    var $x = ["Property", 2, name];
    $x.__enum__ = de.polygonal._Printf.FormatToken;
    $x.toString = $estr;
    return $x; };
  de.polygonal._Printf.FormatToken.Unknown = function(str, pos) {
    var $x = ["Unknown", 3, str, pos];
    $x.__enum__ = de.polygonal._Printf.FormatToken;
    $x.toString = $estr;
    return $x; };
  de.polygonal._Printf.FormatToken.__empty_constructs__ = [];
  de.polygonal._Printf.FormatDataType = $hxClasses["de.polygonal._Printf.FormatDataType"] = { __ename__: ["de", "polygonal", "_Printf", "FormatDataType"], __constructs__: ["FmtInteger", "FmtFloat", "FmtString", "FmtPointer", "FmtNothing"] };
  de.polygonal._Printf.FormatDataType.FmtInteger = function(integerType) {
    var $x = ["FmtInteger", 0, integerType];
    $x.__enum__ = de.polygonal._Printf.FormatDataType;
    $x.toString = $estr;
    return $x; };
  de.polygonal._Printf.FormatDataType.FmtFloat = function(floatType) {
    var $x = ["FmtFloat", 1, floatType];
    $x.__enum__ = de.polygonal._Printf.FormatDataType;
    $x.toString = $estr;
    return $x; };
  de.polygonal._Printf.FormatDataType.FmtString = ["FmtString", 2];
  de.polygonal._Printf.FormatDataType.FmtString.toString = $estr;
  de.polygonal._Printf.FormatDataType.FmtString.__enum__ = de.polygonal._Printf.FormatDataType;
  de.polygonal._Printf.FormatDataType.FmtPointer = ["FmtPointer", 3];
  de.polygonal._Printf.FormatDataType.FmtPointer.toString = $estr;
  de.polygonal._Printf.FormatDataType.FmtPointer.__enum__ = de.polygonal._Printf.FormatDataType;
  de.polygonal._Printf.FormatDataType.FmtNothing = ["FmtNothing", 4];
  de.polygonal._Printf.FormatDataType.FmtNothing.toString = $estr;
  de.polygonal._Printf.FormatDataType.FmtNothing.__enum__ = de.polygonal._Printf.FormatDataType;
  de.polygonal._Printf.FormatDataType.__empty_constructs__ = [de.polygonal._Printf.FormatDataType.FmtString, de.polygonal._Printf.FormatDataType.FmtPointer, de.polygonal._Printf.FormatDataType.FmtNothing];
  de.polygonal._Printf.IntegerType = $hxClasses["de.polygonal._Printf.IntegerType"] = { __ename__: ["de", "polygonal", "_Printf", "IntegerType"], __constructs__: ["ICharacter", "ISignedDecimal", "IUnsignedDecimal", "IOctal", "IHex", "IBin"] };
  de.polygonal._Printf.IntegerType.ICharacter = ["ICharacter", 0];
  de.polygonal._Printf.IntegerType.ICharacter.toString = $estr;
  de.polygonal._Printf.IntegerType.ICharacter.__enum__ = de.polygonal._Printf.IntegerType;
  de.polygonal._Printf.IntegerType.ISignedDecimal = ["ISignedDecimal", 1];
  de.polygonal._Printf.IntegerType.ISignedDecimal.toString = $estr;
  de.polygonal._Printf.IntegerType.ISignedDecimal.__enum__ = de.polygonal._Printf.IntegerType;
  de.polygonal._Printf.IntegerType.IUnsignedDecimal = ["IUnsignedDecimal", 2];
  de.polygonal._Printf.IntegerType.IUnsignedDecimal.toString = $estr;
  de.polygonal._Printf.IntegerType.IUnsignedDecimal.__enum__ = de.polygonal._Printf.IntegerType;
  de.polygonal._Printf.IntegerType.IOctal = ["IOctal", 3];
  de.polygonal._Printf.IntegerType.IOctal.toString = $estr;
  de.polygonal._Printf.IntegerType.IOctal.__enum__ = de.polygonal._Printf.IntegerType;
  de.polygonal._Printf.IntegerType.IHex = ["IHex", 4];
  de.polygonal._Printf.IntegerType.IHex.toString = $estr;
  de.polygonal._Printf.IntegerType.IHex.__enum__ = de.polygonal._Printf.IntegerType;
  de.polygonal._Printf.IntegerType.IBin = ["IBin", 5];
  de.polygonal._Printf.IntegerType.IBin.toString = $estr;
  de.polygonal._Printf.IntegerType.IBin.__enum__ = de.polygonal._Printf.IntegerType;
  de.polygonal._Printf.IntegerType.__empty_constructs__ = [de.polygonal._Printf.IntegerType.ICharacter, de.polygonal._Printf.IntegerType.ISignedDecimal, de.polygonal._Printf.IntegerType.IUnsignedDecimal, de.polygonal._Printf.IntegerType.IOctal, de.polygonal._Printf.IntegerType.IHex, de.polygonal._Printf.IntegerType.IBin];
  de.polygonal._Printf.FloatType = $hxClasses["de.polygonal._Printf.FloatType"] = { __ename__: ["de", "polygonal", "_Printf", "FloatType"], __constructs__: ["FNormal", "FScientific", "FNatural"] };
  de.polygonal._Printf.FloatType.FNormal = ["FNormal", 0];
  de.polygonal._Printf.FloatType.FNormal.toString = $estr;
  de.polygonal._Printf.FloatType.FNormal.__enum__ = de.polygonal._Printf.FloatType;
  de.polygonal._Printf.FloatType.FScientific = ["FScientific", 1];
  de.polygonal._Printf.FloatType.FScientific.toString = $estr;
  de.polygonal._Printf.FloatType.FScientific.__enum__ = de.polygonal._Printf.FloatType;
  de.polygonal._Printf.FloatType.FNatural = ["FNatural", 2];
  de.polygonal._Printf.FloatType.FNatural.toString = $estr;
  de.polygonal._Printf.FloatType.FNatural.__enum__ = de.polygonal._Printf.FloatType;
  de.polygonal._Printf.FloatType.__empty_constructs__ = [de.polygonal._Printf.FloatType.FNormal, de.polygonal._Printf.FloatType.FScientific, de.polygonal._Printf.FloatType.FNatural];
  de.polygonal.ai = {};
  de.polygonal.ai.pathfinding = {};
  de.polygonal.ai.pathfinding.AStar = function(graph) {
    this._graph = graph;
    this._que = new de.polygonal.ds.Heap();
  };
  $hxClasses["de.polygonal.ai.pathfinding.AStar"] = de.polygonal.ai.pathfinding.AStar;
  de.polygonal.ai.pathfinding.AStar.__name__ = ["de", "polygonal", "ai", "pathfinding", "AStar"];
  de.polygonal.ai.pathfinding.AStar.prototype = {
    _graph: null,
    _que: null,
    free: function() {
      this._graph.free();
      this._que.free();
      this._graph = null;
      this._que = null;
    },
    find: function(graph, source, target, path) {
      var pathExists = false;
      var walker = graph._nodeList;
      while (walker != null) {
        walker.marked = false;
        walker.parent = null;
        walker.val.reset();
        walker = walker.next;
      }
      var q = this._que;
      q.clear(null);
      // q.pop();
      q.add(source);
      
      while (q._size > 0) {
        var waypoint1 = q.pop();
        waypoint1.onQue = false;

        if (waypoint1.node) {
        	
          var node1 = waypoint1.node;
          if (node1.marked) continue;
          node1.marked = true;

          if (node1 == target.node) {
            pathExists = true;
            break;
          }
          var arc = node1.arcList;

          while (arc != null) {
            var node2 = arc.node;
            if (node2.marked) {
              arc = arc.next;
              continue;
            }
            var waypoint2 = node2.val;
            var distance = waypoint1.distance + waypoint1.distanceTo(waypoint2) * arc.cost;
            if (node2.parent != null) {
              if (distance < waypoint2.distance) {
                node2.parent = node1;
                waypoint2.distance = distance;
              } else {
                arc = arc.next;
                continue;
              }
            } else {
              node2.parent = node1;
              waypoint2.distance = distance;
            }
            var heuristics = waypoint2.distanceTo(target) + distance;
            waypoint2.heuristic = heuristics;
            if (!waypoint2.onQue) {
              waypoint2.onQue = true;
              q.add(waypoint2);
            }
            arc = arc.next;
          }
        }

      }
      if (pathExists) {
        var walker1 = target;
        while (walker1 != source) {
          path.set(path._size, walker1);
          walker1 = walker1.node.parent.val;
        }
        path.set(path._size, source);
        path.reverse();
      }
      return pathExists;
    },
    __class__: de.polygonal.ai.pathfinding.AStar
  };
  de.polygonal.ds = {};
  de.polygonal.ds.Comparable = function() {};
  $hxClasses["de.polygonal.ds.Comparable"] = de.polygonal.ds.Comparable;
  de.polygonal.ds.Comparable.__name__ = ["de", "polygonal", "ds", "Comparable"];
  de.polygonal.ds.Comparable.prototype = {
    compare: null,
    __class__: de.polygonal.ds.Comparable
  };
  de.polygonal.ds.Heapable = function() {};
  $hxClasses["de.polygonal.ds.Heapable"] = de.polygonal.ds.Heapable;
  de.polygonal.ds.Heapable.__name__ = ["de", "polygonal", "ds", "Heapable"];
  de.polygonal.ds.Heapable.__interfaces__ = [de.polygonal.ds.Comparable];
  de.polygonal.ds.Heapable.prototype = {
    position: null,
    __class__: de.polygonal.ds.Heapable
  };
  de.polygonal.ai.pathfinding.AStarWaypoint = function() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.position = -1;
    this.distance = Math.NaN;
    this.heuristic = Math.NaN;
    this.onQue = false;
    this.node = null;
  };
  $hxClasses["de.polygonal.ai.pathfinding.AStarWaypoint"] = de.polygonal.ai.pathfinding.AStarWaypoint;
  de.polygonal.ai.pathfinding.AStarWaypoint.__name__ = ["de", "polygonal", "ai", "pathfinding", "AStarWaypoint"];
  de.polygonal.ai.pathfinding.AStarWaypoint.__interfaces__ = [de.polygonal.ds.Heapable];
  de.polygonal.ai.pathfinding.AStarWaypoint.prototype = {
    x: null,
    y: null,
    z: null,
    position: null,
    distance: null,
    heuristic: null,
    onQue: null,
    node: null,
    reset: function() {
      this.distance = 0;
      this.heuristic = 0;
      this.onQue = false;
    },
    distanceTo: function(wp) {
      var dx = wp.x - this.x;
      var dy = wp.y - this.y;
      var dz = wp.z - this.z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    },
    compare: function(other) {
      var x = other.heuristic - this.heuristic;
      if (x > 0.) return 1;
      else if (x < 0.) return -1;
      else return 0;
    },
    toString: function() {
      return de.polygonal.Printf.format("{ AStarWaypoint x: %.2f, y: %.2f }", [this.x, this.y]);
    },
    __class__: de.polygonal.ai.pathfinding.AStarWaypoint
  };
  de.polygonal.ds.ArrayUtil = function() {};
  $hxClasses["de.polygonal.ds.ArrayUtil"] = de.polygonal.ds.ArrayUtil;
  de.polygonal.ds.ArrayUtil.__name__ = ["de", "polygonal", "ds", "ArrayUtil"];
  de.polygonal.ds.ArrayUtil.alloc = function(x) {
    var a;
    a = new Array(x);
    return a;
  };
  de.polygonal.ds.ArrayUtil.shrink = function(a, x) {
    if (a.length > x) a.length = x;
    return a;
  };
  de.polygonal.ds.ArrayUtil.copy = function(src, dst, min, max) {
    if (max == null) max = -1;
    if (min == null) min = 0;
    if (max == -1) max = src.length;
    var j = 0;
    var _g = min;
    while (_g < max) {
      var i = _g++;
      dst[j++] = src[i];
    }
    return dst;
  };
  de.polygonal.ds.ArrayUtil.fill = function(dst, x, k) {
    if (k == null) k = -1;
    if (k == -1) k = dst.length;
    var _g = 0;
    while (_g < k) {
      var i = _g++;
      dst[i] = x;
    }
  };
  de.polygonal.ds.ArrayUtil.assign = function(dst, C, args, k) {
    if (k == null) k = -1;
    if (k == -1) k = dst.length;
    if (args == null) args = [];
    var _g = 0;
    while (_g < k) {
      var i = _g++;
      dst[i] = Type.createInstance(C, args);
    }
  };
  de.polygonal.ds.ArrayUtil.memmove = function(a, destination, source, n) {
    if (source == destination) return;
    else if (source <= destination) {
      var i = source + n;
      var j = destination + n;
      var _g = 0;
      while (_g < n) {
        var k = _g++;
        i--;
        j--;
        a[j] = a[i];
      }
    } else {
      var i1 = source;
      var j1 = destination;
      var _g1 = 0;
      while (_g1 < n) {
        var k1 = _g1++;
        a[j1] = a[i1];
        i1++;
        j1++;
      }
    }
  };
  de.polygonal.ds.ArrayUtil.bsearchComparator = function(a, x, min, max, comparator) {
    var l = min;
    var m;
    var h = max + 1;
    while (l < h) {
      m = l + (h - l >> 1);
      if (comparator(a[m], x) < 0) l = m + 1;
      else h = m;
    }
    if (l <= max && comparator(a[l], x) == 0) return l;
    else return ~l;
  };
  de.polygonal.ds.ArrayUtil.bsearchInt = function(a, x, min, max) {
    var l = min;
    var m;
    var h = max + 1;
    while (l < h) {
      m = l + (h - l >> 1);
      if (a[m] < x) l = m + 1;
      else h = m;
    }
    if (l <= max && a[l] == x) return l;
    else return ~l;
  };
  de.polygonal.ds.ArrayUtil.bsearchFloat = function(a, x, min, max) {
    var l = min;
    var m;
    var h = max + 1;
    while (l < h) {
      m = l + (h - l >> 1);
      if (a[m] < x) l = m + 1;
      else h = m;
    }
    if (l <= max && a[l] == x) return l;
    else return ~l;
  };
  de.polygonal.ds.ArrayUtil.shuffle = function(a, rval) {
    var s = a.length;
    if (rval == null) {
      var m = Math;
      while (--s > 1) {
        var i = Std["int"](m.random() * s);
        var t = a[s];
        a[s] = a[i];
        a[i] = t;
      }
    } else {
      var j = 0;
      while (--s > 1) {
        var i1 = Std["int"](rval[j++] * s);
        var t1 = a[s];
        a[s] = a[i1];
        a[i1] = t1;
      }
    }
  };
  de.polygonal.ds.ArrayUtil.sortRange = function(a, compare, useInsertionSort, first, count) {
    var k = a.length;
    if (k > 1) {
      if (useInsertionSort) de.polygonal.ds.ArrayUtil._insertionSort(a, first, count, compare);
      else de.polygonal.ds.ArrayUtil._quickSort(a, first, count, compare);
    }
  };
  de.polygonal.ds.ArrayUtil.quickPerm = function(n) {
    var results = [];
    var a = [];
    var p = [];
    var i;
    var j;
    var tmp;
    var _g = 0;
    while (_g < n) {
      var i1 = _g++;
      a[i1] = i1 + 1;
      p[i1] = 0;
    }
    results.push(a.slice());
    i = 1;
    while (i < n)
      if (p[i] < i) {
        j = i % 2 * p[i];
        tmp = a[j];
        a[j] = a[i];
        a[i] = tmp;
        results.push(a.slice());
        p[i]++;
        i = 1;
      } else {
        p[i] = 0;
        i++;
      }
    return results;
  };
  de.polygonal.ds.ArrayUtil.equals = function(a, b) {
    if (a.length != b.length) return false;
    var _g1 = 0;
    var _g = a.length;
    while (_g1 < _g) {
      var i = _g1++;
      if (a[i] != b[i]) return false;
    }
    return true;
  };
  de.polygonal.ds.ArrayUtil.split = function(a, n, k) {
    var output = new Array();
    var b = null;
    var _g = 0;
    while (_g < n) {
      var i = _g++;
      if (i % k == 0) output[i / k | 0] = b = [];
      b.push(a[i]);
    }
    return output;
  };
  de.polygonal.ds.ArrayUtil._insertionSort = function(a, first, k, cmp) {
    var _g1 = first + 1;
    var _g = first + k;
    while (_g1 < _g) {
      var i = _g1++;
      var x = a[i];
      var j = i;
      while (j > first) {
        var y = a[j - 1];
        if (cmp(y, x) > 0) {
          a[j] = y;
          j--;
        } else break;
      }
      a[j] = x;
    }
  };
  de.polygonal.ds.ArrayUtil._quickSort = function(a, first, k, cmp) {
    var last = first + k - 1;
    var lo = first;
    var hi = last;
    if (k > 1) {
      var i0 = first;
      var i1 = i0 + (k >> 1);
      var i2 = i0 + k - 1;
      var t0 = a[i0];
      var t1 = a[i1];
      var t2 = a[i2];
      var mid;
      var t = cmp(t0, t2);
      if (t < 0 && cmp(t0, t1) < 0)
        if (cmp(t1, t2) < 0) mid = i1;
        else mid = i2;
      else if (cmp(t1, t0) < 0 && cmp(t1, t2) < 0)
        if (t < 0) mid = i0;
        else mid = i2;
      else if (cmp(t2, t0) < 0) mid = i1;
      else mid = i0;
      var pivot = a[mid];
      a[mid] = a[first];
      while (lo < hi) {
        while (cmp(pivot, a[hi]) < 0 && lo < hi) hi--;
        if (hi != lo) {
          a[lo] = a[hi];
          lo++;
        }
        while (cmp(pivot, a[lo]) > 0 && lo < hi) lo++;
        if (hi != lo) {
          a[hi] = a[lo];
          hi--;
        }
      }
      a[lo] = pivot;
      de.polygonal.ds.ArrayUtil._quickSort(a, first, lo - first, cmp);
      de.polygonal.ds.ArrayUtil._quickSort(a, lo + 1, last - lo, cmp);
    }
  };
  de.polygonal.ds.Bits = function() {};
  $hxClasses["de.polygonal.ds.Bits"] = de.polygonal.ds.Bits;
  de.polygonal.ds.Bits.__name__ = ["de", "polygonal", "ds", "Bits"];
  de.polygonal.ds.Bits.getBits = function(x, mask) {
    return x & mask;
  };
  de.polygonal.ds.Bits.hasBits = function(x, mask) {
    return (x & mask) != 0;
  };
  de.polygonal.ds.Bits.incBits = function(x, mask) {
    return (x & mask) == mask;
  };
  de.polygonal.ds.Bits.setBits = function(x, mask) {
    return x | mask;
  };
  de.polygonal.ds.Bits.clrBits = function(x, mask) {
    return x & ~mask;
  };
  de.polygonal.ds.Bits.invBits = function(x, mask) {
    return x ^ mask;
  };
  de.polygonal.ds.Bits.setBitsIf = function(x, mask, expr) {
    if (expr) return x | mask;
    else return x & ~mask;
  };
  de.polygonal.ds.Bits.hasBitAt = function(x, i) {
    return (x & 1 << i) != 0;
  };
  de.polygonal.ds.Bits.setBitAt = function(x, i) {
    return x | 1 << i;
  };
  de.polygonal.ds.Bits.clrBitAt = function(x, i) {
    return x & ~(1 << i);
  };
  de.polygonal.ds.Bits.invBitAt = function(x, i) {
    return x ^ 1 << i;
  };
  de.polygonal.ds.Bits.setBitsRange = function(x, min, max) {
    var _g = min;
    while (_g < max) {
      var i = _g++;
      x = x | 1 << i;
    }
    return x;
  };
  de.polygonal.ds.Bits.mask = function(n) {
    return (1 << n) - 1;
  };
  de.polygonal.ds.Bits.ones = function(x) {
    x -= x >> 1 & 1431655765;
    x = (x >> 2 & 858993459) + (x & 858993459);
    x = (x >> 4) + x & 252645135;
    x += x >> 8;
    x += x >> 16;
    return x & 63;
  };
  de.polygonal.ds.Bits.ntz = function(x) {
    var n = 0;
    if (x != 0) {
      x = (x ^ x - 1) >>> 1;
      while (x != 0) {
        x >>= 1;
        n++;
      }
    }
    return n;
  };
  de.polygonal.ds.Bits.nlz = function(x) {
    if (x < 0) return 0;
    else {
      x |= x >> 1;
      x |= x >> 2;
      x |= x >> 4;
      x |= x >> 8;
      x |= x >> 16;
      return 32 - de.polygonal.ds.Bits.ones(x);
    }
  };
  de.polygonal.ds.Bits.msb = function(x) {
    x |= x >> 1;
    x |= x >> 2;
    x |= x >> 4;
    x |= x >> 8;
    x |= x >> 16;
    return x & ~(x >>> 1);
  };
  de.polygonal.ds.Bits.rol = function(x, n) {
    return x << n | x >>> 32 - n;
  };
  de.polygonal.ds.Bits.ror = function(x, n) {
    return x >>> n | x << 32 - n;
  };
  de.polygonal.ds.Bits.reverse = function(x) {
    var y = 1431655765;
    x = x >> 1 & y | (x & y) << 1;
    y = 858993459;
    x = x >> 2 & y | (x & y) << 2;
    y = 252645135;
    x = x >> 4 & y | (x & y) << 4;
    y = 16711935;
    x = x >> 8 & y | (x & y) << 8;
    return x >> 16 | x << 16;
  };
  de.polygonal.ds.Bits.flipWORD = function(x) {
    return x << 8 | x >> 8;
  };
  de.polygonal.ds.Bits.flipDWORD = function(x) {
    return x << 24 | x << 8 & 16711680 | x >> 8 & 65280 | x >> 24;
  };
  de.polygonal.ds.Bits.packI16 = function(lo, hi) {
    return hi + 32768 << 16 | lo + 32768;
  };
  de.polygonal.ds.Bits.packUI16 = function(lo, hi) {
    return hi << 16 | lo;
  };
  de.polygonal.ds.Bits.unpackI16Lo = function(x) {
    return (x & 65535) - 32768;
  };
  de.polygonal.ds.Bits.unpackI16Hi = function(x) {
    return (x >>> 16) - 32768;
  };
  de.polygonal.ds.Bits.unpackUI16Lo = function(x) {
    return x & 65535;
  };
  de.polygonal.ds.Bits.unpackUI16Hi = function(x) {
    return x >>> 16;
  };
  de.polygonal.ds.Cloneable = function() {};
  $hxClasses["de.polygonal.ds.Cloneable"] = de.polygonal.ds.Cloneable;
  de.polygonal.ds.Cloneable.__name__ = ["de", "polygonal", "ds", "Cloneable"];
  de.polygonal.ds.Cloneable.prototype = {
    clone: null,
    __class__: de.polygonal.ds.Cloneable
  };
  de.polygonal.ds.Hashable = function() {};
  $hxClasses["de.polygonal.ds.Hashable"] = de.polygonal.ds.Hashable;
  de.polygonal.ds.Hashable.__name__ = ["de", "polygonal", "ds", "Hashable"];
  de.polygonal.ds.Hashable.prototype = {
    key: null,
    __class__: de.polygonal.ds.Hashable
  };
  de.polygonal.ds.Collection = function() {};
  $hxClasses["de.polygonal.ds.Collection"] = de.polygonal.ds.Collection;
  de.polygonal.ds.Collection.__name__ = ["de", "polygonal", "ds", "Collection"];
  de.polygonal.ds.Collection.__interfaces__ = [de.polygonal.ds.Hashable];
  de.polygonal.ds.Collection.prototype = {
    free: null,
    contains: null,
    remove: null,
    clear: null,
    iterator: null,
    isEmpty: null,
    size: null,
    toArray: null,
    clone: null,
    __class__: de.polygonal.ds.Collection
  };
  de.polygonal.ds.DA = function(reservedSize, maxSize) {
    if (maxSize == null) maxSize = -1;
    if (reservedSize == null) reservedSize = 0;
    this._size = 0;
    this._iterator = null;
    this.maxSize = -1;
    if (reservedSize > 0) this._a = de.polygonal.ds.ArrayUtil.alloc(reservedSize);
    else this._a = new Array();
    this.key = de.polygonal.ds.HashKey._counter++;
    this.reuseIterator = false;
  };
  $hxClasses["de.polygonal.ds.DA"] = de.polygonal.ds.DA;
  de.polygonal.ds.DA.__name__ = ["de", "polygonal", "ds", "DA"];
  de.polygonal.ds.DA.__interfaces__ = [de.polygonal.ds.Collection];
  de.polygonal.ds.DA.prototype = {
    key: null,
    _a: null,
    _size: null,
    _iterator: null,
    maxSize: null,
    reuseIterator: null,
    pack: function() {
      var s = this._a.length;
      if (s == this._size) return;
      var tmp = this._a;
      this._a = de.polygonal.ds.ArrayUtil.alloc(this._size);
      var _g1 = 0;
      var _g = this._size;
      while (_g1 < _g) {
        var i = _g1++;
        this._a[i] = tmp[i];
      }
      var _g11 = this._size;
      var _g2 = tmp.length;
      while (_g11 < _g2) {
        var i1 = _g11++;
        tmp[i1] = null;
      }
    },
    reserve: function(x) {
      if (this._size == x) return;
      var tmp = this._a;
      this._a = de.polygonal.ds.ArrayUtil.alloc(x);
      if (this._size < x) {
        var _g1 = 0;
        var _g = this._size;
        while (_g1 < _g) {
          var i = _g1++;
          this._a[i] = tmp[i];
        }
      }
    },
    trim: function(x) {
      this._size = x;
    },
    get: function(i) {
      return this._a[i];
    },
    getNext: function(i) {
      return this._a[i + 1 == this._size ? 0 : i + 1];
    },
    getPrev: function(i) {
      return this._a[i - 1 == -1 ? this._size - 1 : i - 1];
    },
    set: function(i, x) {
      this._a[i] = x;
      if (i >= this._size) this._size++;
    },
    swp: function(i, j) {
      var tmp = this._a[i];
      this._a[i] = this._a[j];
      if (i >= this._size) this._size++;
      this._a[j] = tmp;
      if (j >= this._size) this._size++;
    },
    cpy: function(i, j) {
      this._a[i] = this._a[j];
      if (i >= this._size) this._size++;
    },
    front: function() {
      return this._a[0];
    },
    back: function() {
      return this._a[this._size - 1];
    },
    popBack: function() {
      var x = this._a[this._size - 1];
      this._size--;
      return x;
    },
    pushBack: function(x) {
      this.set(this._size, x);
    },
    popFront: function() {
      return this.removeAt(0);
    },
    pushFront: function(x) {
      this.insertAt(0, x);
    },
    insertAt: function(i, x) {
      var p = this._size;
      while (p > i) this.__cpy(p--, p);
      this._a[i] = x;
      this._size++;
    },
    removeAt: function(i) {
      var x = this._a[i];
      var k = this._size - 1;
      var p = i;
      while (p < k) this.__cpy(p++, p);
      this._size--;
      return x;
    },
    swapPop: function(i) {
      this.__set(i, this.__get(--this._size));
    },
    removeRange: function(i, n, output) {
      if (output == null) {
        var s = this._size;
        var p = i + n;
        while (p < s) {
          this._a[p - n] = this._a[p];
          p++;
        }
      } else {
        var s1 = this._size;
        var p1 = i + n;
        var e;
        var j;
        while (p1 < s1) {
          j = p1 - n;
          e = this._a[j];
          output.set(output._size, e);
          this.__cpy(j, p1++);
        }
      }
      this._size -= n;
      return output;
    },
    concat: function(x, copy) {
      if (copy == null) copy = false;
      if (copy) {
        var copy1 = new de.polygonal.ds.DA();
        copy1._size = this._size + x._size;
        var _g1 = 0;
        var _g = this._size;
        while (_g1 < _g) {
          var i = _g1++;
          copy1._a[i] = this._a[i];
          if (i >= copy1._size) copy1._size++;
        }
        var _g11 = this._size;
        var _g2 = this._size + x._size;
        while (_g11 < _g2) {
          var i1 = _g11++;
          copy1._a[i1] = x._a[i1 - this._size];
          if (i1 >= copy1._size) copy1._size++;
        }
        return copy1;
      } else {
        var j = this._size;
        this._size += x._size;
        var _g12 = 0;
        var _g3 = x._size;
        while (_g12 < _g3) {
          var i2 = _g12++;
          this.__set(j++, x._a[i2]);
        }
        return this;
      }
    },
    indexOf: function(x, from, binarySearch, comparator) {
      if (binarySearch == null) binarySearch = false;
      if (from == null) from = 0;
      if (this._size == 0) return -1;
      else if (binarySearch) {
        if (comparator != null) return de.polygonal.ds.ArrayUtil.bsearchComparator(this._a, x, from, this._size - 1, comparator);
        else {
          var k = this._size;
          var l = from;
          var m;
          var h = k;
          while (l < h) {
            m = l + (h - l >> 1);
            if ((js.Boot.__cast(this._a[m], de.polygonal.ds.Comparable)).compare(x) < 0) l = m + 1;
            else h = m;
          }
          if (l <= k && (js.Boot.__cast(this._a[l], de.polygonal.ds.Comparable)).compare(x) == 0) return l;
          else return -l;
        }
      } else {
        var i = from;
        var j = -1;
        var k1 = this._size - 1;
        do
          if (this._a[i] == x) {
            j = i;
            break;
          }
        while (i++ < k1);
        return j;
      }
    },
    lastIndexOf: function(x, from) {
      if (from == null) from = -1;
      if (this._size == 0) return -1;
      else {
        if (from < 0) from = this._size + from;
        var j = -1;
        var i = from;
        do
          if (this._a[i] == x) {
            j = i;
            break;
          }
        while (i-- > 0);
        return j;
      }
    },
    reverse: function() {
      if (this._a.length > this._size) this._a = de.polygonal.ds.ArrayUtil.shrink(this._a, this._size);
      this._a.reverse();
    },
    assign: function(C, args, n) {
      if (n == null) n = 0;
      if (n > 0) this._size = n;
      else n = this._size;
      if (args == null) args = [];
      var _g = 0;
      while (_g < n) {
        var i = _g++;
        this.__set(i, Type.createInstance(C, args));
      }
    },
    fill: function(x, n) {
      if (n == null) n = 0;
      if (n > 0) this._size = n;
      else n = this._size;
      var _g = 0;
      while (_g < n) {
        var i = _g++;
        this._a[i] = x;
      }
      return this;
    },
    memmove: function(destination, source, n) {
      if (source == destination) return;
      else if (source <= destination) {
        var i = source + n;
        var j = destination + n;
        var _g = 0;
        while (_g < n) {
          var k = _g++;
          i--;
          j--;
          this._a[j] = this._a[i];
        }
      } else {
        var i1 = source;
        var j1 = destination;
        var _g1 = 0;
        while (_g1 < n) {
          var k1 = _g1++;
          this._a[j1] = this._a[i1];
          i1++;
          j1++;
        }
      }
    },
    join: function(x) {
      if (this._size == 0) return "";
      if (this._size == 1) return Std.string(this._a[0]);
      var s = Std.string(this._a[0]) + x;
      var _g1 = 1;
      var _g = this._size - 1;
      while (_g1 < _g) {
        var i = _g1++;
        s += Std.string(this._a[i]);
        s += x;
      }
      s += Std.string(this._a[this._size - 1]);
      return s;
    },
    sort: function(compare, useInsertionSort, first, count) {
      if (count == null) count = -1;
      if (first == null) first = 0;
      if (useInsertionSort == null) useInsertionSort = false;
      if (this._size > 1) {
        if (count == -1) count = this._size - first;
        if (compare == null) {
          if (useInsertionSort) this._insertionSortComparable(first, count);
          else this._quickSortComparable(first, count);
        } else if (useInsertionSort) this._insertionSort(first, count, compare);
        else if (first == 0 && count == this._size) {
          de.polygonal.ds.ArrayUtil.shrink(this._a, this._size);
          this._a.sort(compare);
        } else this._quickSort(first, count, compare);
      }
    },
    inRange: function(i) {
      return i >= 0 && i < this._size;
    },
    getArray: function() {
      return this._a;
    },
    free: function() {
      var _g1 = 0;
      var _g = this._a.length;
      while (_g1 < _g) {
        var i = _g1++;
        this._a[i] = null;
      }
      this._a = null;
      this._iterator = null;
    },
    contains: function(x) {
      var found = false;
      var _g1 = 0;
      var _g = this._size;
      while (_g1 < _g) {
        var i = _g1++;
        if (this._a[i] == x) {
          found = true;
          break;
        }
      }
      return found;
    },
    remove: function(x) {
      if (this._size == 0) return false;
      var i = 0;
      var s = this._size;
      while (i < s) {
        if (this._a[i] == x) {
          s--;
          var p = i;
          while (p < s) {
            this._a[p] = this._a[p + 1];
            ++p;
          }
          continue;
        }
        i++;
      }
      var found = this._size - s != 0;
      this._size = s;
      return found;
    },
    clear: function(purge) {
      if (purge == null) purge = false;
      if (purge) {
        var _g1 = 0;
        var _g = this._a.length;
        while (_g1 < _g) {
          var i = _g1++;
          this._a[i] = null;
        }
      }
      this._size = 0;
    },
    iterator: function() {
      if (this.reuseIterator) {
        if (this._iterator == null) this._iterator = new de.polygonal.ds.DAIterator(this);
        else this._iterator.reset();
        return this._iterator;
      } else return new de.polygonal.ds.DAIterator(this);
    },
    size: function() {
      return this._size;
    },
    isEmpty: function() {
      return this._size == 0;
    },
    toArray: function() {
      var a = de.polygonal.ds.ArrayUtil.alloc(this._size);
      var _g1 = 0;
      var _g = this._size;
      while (_g1 < _g) {
        var i = _g1++;
        a[i] = this._a[i];
      }
      return a;
    },
    clone: function(assign, copier) {
      if (assign == null) assign = true;
      var copy = new de.polygonal.ds.DA(this._size, this.maxSize);
      copy._size = this._size;
      if (assign) {
        var _g1 = 0;
        var _g = this._size;
        while (_g1 < _g) {
          var i = _g1++;
          copy._a[i] = this._a[i];
        }
      } else if (copier == null) {
        var c = null;
        var _g11 = 0;
        var _g2 = this._size;
        while (_g11 < _g2) {
          var i1 = _g11++;
          c = js.Boot.__cast(this._a[i1], de.polygonal.ds.Cloneable);
          copy.__set(i1, c.clone());
        }
      } else {
        var _g12 = 0;
        var _g3 = this._size;
        while (_g12 < _g3) {
          var i2 = _g12++;
          copy.__set(i2, copier(this._a[i2]));
        }
      }
      return copy;
    },
    shuffle: function(rval) {
      var s = this._size;
      if (rval == null) {
        var m = Math;
        while (--s > 1) {
          var i = Std["int"](m.random() * s);
          var t = this._a[s];
          this._a[s] = this._a[i];
          this._a[i] = t;
        }
      } else {
        var j = 0;
        while (--s > 1) {
          var i1 = Std["int"](rval.get(j++) * s);
          var t1 = this._a[s];
          this._a[s] = this._a[i1];
          this._a[i1] = t1;
        }
      }
    },
    toString: function() {
      var s = "{ DA size: " + this._size + " }";
      if (this._size == 0) return s;
      s += "\n[\n";
      var _g1 = 0;
      var _g = this._size;
      while (_g1 < _g) {
        var i = _g1++;
        s += de.polygonal.Printf.format("  %4d -> %s\n", [i, Std.string(this._a[i])]);
      }
      s += "]";
      return s;
    },
    _quickSort: function(first, k, cmp) {
      var last = first + k - 1;
      var lo = first;
      var hi = last;
      if (k > 1) {
        var i0 = first;
        var i1 = i0 + (k >> 1);
        var i2 = i0 + k - 1;
        var t0 = this._a[i0];
        var t1 = this._a[i1];
        var t2 = this._a[i2];
        var mid;
        var t = cmp(t0, t2);
        if (t < 0 && cmp(t0, t1) < 0)
          if (cmp(t1, t2) < 0) mid = i1;
          else mid = i2;
        else if (cmp(t1, t0) < 0 && cmp(t1, t2) < 0)
          if (t < 0) mid = i0;
          else mid = i2;
        else if (cmp(t2, t0) < 0) mid = i1;
        else mid = i0;
        var pivot = this._a[mid];
        this._a[mid] = this._a[first];
        while (lo < hi) {
          while (cmp(pivot, this._a[hi]) < 0 && lo < hi) hi--;
          if (hi != lo) {
            this._a[lo] = this._a[hi];
            lo++;
          }
          while (cmp(pivot, this._a[lo]) > 0 && lo < hi) lo++;
          if (hi != lo) {
            this._a[hi] = this._a[lo];
            hi--;
          }
        }
        this._a[lo] = pivot;
        this._quickSort(first, lo - first, cmp);
        this._quickSort(lo + 1, last - lo, cmp);
      }
    },
    _quickSortComparable: function(first, k) {
      var last = first + k - 1;
      var lo = first;
      var hi = last;
      if (k > 1) {
        var i0 = first;
        var i1 = i0 + (k >> 1);
        var i2 = i0 + k - 1;
        var t0;
        t0 = js.Boot.__cast(this._a[i0], de.polygonal.ds.Comparable);
        var t1;
        t1 = js.Boot.__cast(this._a[i1], de.polygonal.ds.Comparable);
        var t2;
        t2 = js.Boot.__cast(this._a[i2], de.polygonal.ds.Comparable);
        var mid;
        var t = t0.compare(t2);
        if (t < 0 && t0.compare(t1) < 0)
          if (t1.compare(t2) < 0) mid = i1;
          else mid = i2;
        else if (t0.compare(t1) < 0 && t1.compare(t2) < 0)
          if (t < 0) mid = i0;
          else mid = i2;
        else if (t2.compare(t0) < 0) mid = i1;
        else mid = i0;
        var pivot;
        pivot = js.Boot.__cast(this._a[mid], de.polygonal.ds.Comparable);
        this._a[mid] = this._a[first];
        while (lo < hi) {
          while (pivot.compare(js.Boot.__cast(this._a[hi], de.polygonal.ds.Comparable)) < 0 && lo < hi) hi--;
          if (hi != lo) {
            this._a[lo] = this._a[hi];
            lo++;
          }
          while (pivot.compare(js.Boot.__cast(this._a[lo], de.polygonal.ds.Comparable)) > 0 && lo < hi) lo++;
          if (hi != lo) {
            this._a[hi] = this._a[lo];
            hi--;
          }
        }
        this._a[lo] = pivot;
        this._quickSortComparable(first, lo - first);
        this._quickSortComparable(lo + 1, last - lo);
      }
    },
    _insertionSort: function(first, k, cmp) {
      var _g1 = first + 1;
      var _g = first + k;
      while (_g1 < _g) {
        var i = _g1++;
        var x = this._a[i];
        var j = i;
        while (j > first) {
          var y = this._a[j - 1];
          if (cmp(y, x) > 0) {
            this._a[j] = y;
            j--;
          } else break;
        }
        this._a[j] = x;
      }
    },
    _insertionSortComparable: function(first, k) {
      var _g1 = first + 1;
      var _g = first + k;
      while (_g1 < _g) {
        var i = _g1++;
        var x = this._a[i];
        var j = i;
        while (j > first) {
          var y = this._a[j - 1];
          if ((js.Boot.__cast(y, de.polygonal.ds.Comparable)).compare(x) > 0) {
            this._a[j] = y;
            j--;
          } else break;
        }
        this._a[j] = x;
      }
    },
    __get: function(i) {
      return this._a[i];
    },
    __set: function(i, x) {
      this._a[i] = x;
    },
    __cpy: function(i, j) {
      this._a[i] = this._a[j];
    },
    __class__: de.polygonal.ds.DA
  };
  de.polygonal.ds.Itr = function() {};
  $hxClasses["de.polygonal.ds.Itr"] = de.polygonal.ds.Itr;
  de.polygonal.ds.Itr.__name__ = ["de", "polygonal", "ds", "Itr"];
  de.polygonal.ds.Itr.prototype = {
    hasNext: null,
    next: null,
    remove: null,
    reset: null,
    __class__: de.polygonal.ds.Itr
  };
  de.polygonal.ds.DAIterator = function(f) {
    this._f = f; {
      this._a = this._f._a;
      this._s = this._f._size;
      this._i = 0;
      this;
    }
  };
  $hxClasses["de.polygonal.ds.DAIterator"] = de.polygonal.ds.DAIterator;
  de.polygonal.ds.DAIterator.__name__ = ["de", "polygonal", "ds", "DAIterator"];
  de.polygonal.ds.DAIterator.__interfaces__ = [de.polygonal.ds.Itr];
  de.polygonal.ds.DAIterator.prototype = {
    _f: null,
    _a: null,
    _i: null,
    _s: null,
    reset: function() {
      this._a = this._f._a;
      this._s = this._f._size;
      this._i = 0;
      return this;
    },
    hasNext: function() {
      return this._i < this._s;
    },
    next: function() {
      return this._a[this._i++];
    },
    remove: function() {
      this._f.removeAt(--this._i);
      this._s--;
    },
    __a: function(f) {
      return f._a;
    },
    __size: function(f) {
      return f._size;
    },
    __class__: de.polygonal.ds.DAIterator
  };
  de.polygonal.ds.Graph = function(maxSize) {
    if (maxSize == null) maxSize = -1;
    this.maxSize = -1;
    this.clear();
    this._size = 0;
    this._iterator = null;
    this.autoClearMarks = false;
    this.key = de.polygonal.ds.HashKey._counter++;
    this.reuseIterator = false;
  };
  $hxClasses["de.polygonal.ds.Graph"] = de.polygonal.ds.Graph;
  de.polygonal.ds.Graph.__name__ = ["de", "polygonal", "ds", "Graph"];
  de.polygonal.ds.Graph.__interfaces__ = [de.polygonal.ds.Collection];
  de.polygonal.ds.Graph.prototype = {
    key: null,
    maxSize: null,
    autoClearMarks: null,
    reuseIterator: null,
    borrowArc: null,
    returnArc: null,
    _nodeList: null,
    _size: null,
    _stack: null,
    _que: null,
    _iterator: null,
    getNodeList: function() {
      return this._nodeList;
    },
    findNode: function(x) {
      var found = false;
      var n = this._nodeList;
      while (n != null) {
        if (n.val == x) {
          found = true;
          break;
        }
        n = n.next;
      }
      if (found) return n;
      else return null;
    },
    createNode: function(x) {
      return new de.polygonal.ds.GraphNode(this, x);
    },
    addNode: function(x) {
      this._size++;
      x.next = this._nodeList;
      if (x.next != null) x.next.prev = x;
      this._nodeList = x;
      return x;
    },
    removeNode: function(x) {
      this.unlink(x);
      if (x.prev != null) x.prev.next = x.next;
      if (x.next != null) x.next.prev = x.prev;
      if (this._nodeList == x) this._nodeList = x.next;
      this._size--;
    },
    addSingleArc: function(source, target, cost) {
      if (cost == null) cost = 1.;
      var walker = this._nodeList;
      while (walker != null) {
        if (walker == source) {
          var sourceNode = walker;
          walker = this._nodeList;
          while (walker != null) {
            if (walker == target) {
              sourceNode.addArc(walker, cost);
              break;
            }
            walker = walker.next;
          }
          break;
        }
        walker = walker.next;
      }
    },
    addMutualArc: function(source, target, cost) {
      if (cost == null) cost = 1.;
      var walker = this._nodeList;
      while (walker != null) {
        if (walker == source) {
          var sourceNode = walker;
          walker = this._nodeList;
          while (walker != null) {
            if (walker == target) {
              sourceNode.addArc(walker, cost);
              walker.addArc(sourceNode, cost);
              break;
            }
            walker = walker.next;
          }
          break;
        }
        walker = walker.next;
      }
    },
    unlink: function(node) {
      var arc0 = node.arcList;
      while (arc0 != null) {
        var node1 = arc0.node;
        var arc1 = node1.arcList;
        while (arc1 != null) {
          var hook = arc1.next;
          if (arc1.node == node) {
            if (arc1.prev != null) arc1.prev.next = hook;
            if (hook != null) hook.prev = arc1.prev;
            if (node1.arcList == arc1) node1.arcList = hook;
            arc1.free();
            if (this.returnArc != null) this.returnArc(arc1);
          }
          arc1 = hook;
        }
        var hook1 = arc0.next;
        if (arc0.prev != null) arc0.prev.next = hook1;
        if (hook1 != null) hook1.prev = arc0.prev;
        if (node.arcList == arc0) node.arcList = hook1;
        arc0.free();
        if (this.returnArc != null) this.returnArc(arc0);
        arc0 = hook1;
      }
      node.arcList = null;
      return node;
    },
    clearMarks: function() {
      var node = this._nodeList;
      while (node != null) {
        node.marked = false;
        node = node.next;
      }
    },
    clearParent: function() {
      var node = this._nodeList;
      while (node != null) {
        node.parent = null;
        node = node.next;
      }
    },
    DFS: function(preflight, seed, process, userData, recursive) {
      if (recursive == null) recursive = false;
      if (preflight == null) preflight = false;
      if (this._size == 0) return;
      if (this.autoClearMarks) this.clearMarks();
      var c = 1;
      if (seed == null) seed = this._nodeList;
      this._stack[0] = seed;
      seed.parent = seed;
      seed.depth = 0;
      if (preflight) {
        if (process == null) {
          if (recursive) {
            var v = seed.val;
            if (v.visit(true, userData)) this._DFSRecursiveVisit(seed, true, userData);
          } else {
            var v1 = null;
            var n = this._stack[0];
            v1 = n.val;
            if (!v1.visit(true, userData)) return;
            while (c > 0) {
              var n1 = this._stack[--c];
              if (n1.marked) continue;
              n1.marked = true;
              v1 = n1.val;
              if (!v1.visit(false, userData)) break;
              var a = n1.arcList;
              while (a != null) {
                v1 = n1.val;
                a.node.parent = n1;
                a.node.depth = n1.depth + 1;
                if (v1.visit(true, userData)) this._stack[c++] = a.node;
                a = a.next;
              }
            }
          }
        } else if (recursive) {
          if (process(seed, true, userData)) this._DFSRecursiveProcess(seed, process, true, userData);
        } else {
          var n2 = this._stack[0];
          if (!process(n2, true, userData)) return;
          while (c > 0) {
            var n3 = this._stack[--c];
            if (n3.marked) continue;
            n3.marked = true;
            if (!process(n3, false, userData)) break;
            var a1 = n3.arcList;
            while (a1 != null) {
              a1.node.parent = n3;
              a1.node.depth = n3.depth + 1;
              if (process(a1.node, true, userData)) this._stack[c++] = a1.node;
              a1 = a1.next;
            }
          }
        }
      } else if (process == null) {
        if (recursive) this._DFSRecursiveVisit(seed, false, userData);
        else {
          var v2 = null;
          while (c > 0) {
            var n4 = this._stack[--c];
            if (n4.marked) continue;
            n4.marked = true;
            v2 = n4.val;
            if (!v2.visit(false, userData)) break;
            var a2 = n4.arcList;
            while (a2 != null) {
              this._stack[c++] = a2.node;
              a2.node.parent = n4;
              a2.node.depth = n4.depth + 1;
              a2 = a2.next;
            }
          }
        }
      } else if (recursive) this._DFSRecursiveProcess(seed, process, false, userData);
      else
        while (c > 0) {
          var n5 = this._stack[--c];
          if (n5.marked) continue;
          n5.marked = true;
          if (!process(n5, false, userData)) break;
          var a3 = n5.arcList;
          while (a3 != null) {
            this._stack[c++] = a3.node;
            a3.node.parent = n5;
            a3.node.depth = n5.depth + 1;
            a3 = a3.next;
          }
        }
    },
    BFS: function(preflight, seed, process, userData) {
      if (preflight == null) preflight = false;
      if (this._size == 0) return;
      if (this.autoClearMarks) this.clearMarks();
      var front = 0;
      var c = 1;
      if (seed == null) seed = this._nodeList;
      this._que[0] = seed;
      seed.marked = true;
      seed.parent = seed;
      seed.depth = 0;
      if (preflight) {
        if (process == null) {
          var v = null;
          var n = this._que[front];
          v = n.val;
          if (!v.visit(true, userData)) return;
          while (c > 0) {
            n = this._que[front];
            v = n.val;
            if (!v.visit(false, userData)) return;
            var a = n.arcList;
            while (a != null) {
              var m = a.node;
              if (m.marked) {
                a = a.next;
                continue;
              }
              m.marked = true;
              m.parent = n;
              m.depth = n.depth + 1;
              v = m.val;
              if (v.visit(true, userData)) this._que[c++ + front] = m;
              a = a.next;
            }
            front++;
            c--;
          }
        } else {
          var n1 = this._que[front];
          if (!process(n1, true, userData)) return;
          while (c > 0) {
            n1 = this._que[front];
            if (!process(n1, false, userData)) return;
            var a1 = n1.arcList;
            while (a1 != null) {
              var m1 = a1.node;
              if (m1.marked) {
                a1 = a1.next;
                continue;
              }
              m1.marked = true;
              m1.parent = n1;
              m1.depth = n1.depth + 1;
              if (process(m1, true, userData)) this._que[c++ + front] = m1;
              a1 = a1.next;
            }
            front++;
            c--;
          }
        }
      } else if (process == null) {
        var v1 = null;
        while (c > 0) {
          var n2 = this._que[front];
          v1 = n2.val;
          if (!v1.visit(false, userData)) return;
          var a2 = n2.arcList;
          while (a2 != null) {
            var m2 = a2.node;
            if (m2.marked) {
              a2 = a2.next;
              continue;
            }
            m2.marked = true;
            m2.parent = n2;
            m2.depth = n2.depth + 1;
            this._que[c++ + front] = m2;
            a2 = a2.next;
          }
          front++;
          c--;
        }
      } else
        while (c > 0) {
          var n3 = this._que[front];
          if (!process(n3, false, userData)) return;
          var a3 = n3.arcList;
          while (a3 != null) {
            var m3 = a3.node;
            if (m3.marked) {
              a3 = a3.next;
              continue;
            }
            m3.marked = true;
            m3.parent = n3;
            m3.depth = n3.depth + 1;
            this._que[c++ + front] = m3;
            a3 = a3.next;
          }
          front++;
          c--;
        }
    },
    DLBFS: function(maxDepth, preflight, seed, process, userData) {
      if (preflight == null) preflight = false;
      if (this._size == 0) return;
      if (this.autoClearMarks) this.clearMarks();
      var front = 0;
      var c = 1;
      var node = this._nodeList;
      while (node != null) {
        node.depth = 0;
        node = node.next;
      }
      if (seed == null) seed = this._nodeList;
      this._que[0] = seed;
      seed.marked = true;
      seed.parent = seed;
      if (preflight) {
        if (process == null) {
          var v = null;
          var n = this._que[front];
          v = n.val;
          if (!v.visit(true, userData)) return;
          while (c > 0) {
            n = this._que[front];
            v = n.val;
            if (!v.visit(false, userData)) return;
            var a = n.arcList;
            while (a != null) {
              var m = a.node;
              if (m.marked) {
                a = a.next;
                continue;
              }
              m.marked = true;
              m.parent = n;
              m.depth = n.depth + 1;
              if (m.depth <= maxDepth) {
                v = m.val;
                if (v.visit(true, userData)) this._que[c++ + front] = m;
              }
              a = a.next;
            }
            front++;
            c--;
          }
        } else {
          var n1 = this._que[front];
          if (!process(n1, true, userData)) return;
          while (c > 0) {
            n1 = this._que[front];
            if (!process(n1, false, userData)) return;
            var a1 = n1.arcList;
            while (a1 != null) {
              var m1 = a1.node;
              if (m1.marked) {
                a1 = a1.next;
                continue;
              }
              m1.marked = true;
              m1.parent = n1;
              m1.depth = n1.depth + 1;
              if (m1.depth <= maxDepth) {
                if (process(m1, true, userData)) this._que[c++ + front] = m1;
              }
              a1 = a1.next;
            }
            front++;
            c--;
          }
        }
      } else if (process == null) {
        var v1 = null;
        while (c > 0) {
          var n2 = this._que[front];
          v1 = n2.val;
          if (!v1.visit(false, userData)) return;
          var a2 = n2.arcList;
          while (a2 != null) {
            var m2 = a2.node;
            if (m2.marked) {
              a2 = a2.next;
              continue;
            }
            m2.marked = true;
            m2.depth = n2.depth + 1;
            m2.parent = n2.parent;
            if (m2.depth <= maxDepth) this._que[c++ + front] = m2;
            a2 = a2.next;
          }
          front++;
          c--;
        }
      } else
        while (c > 0) {
          var n3 = this._que[front];
          if (n3.depth > maxDepth) continue;
          if (!process(n3, false, userData)) return;
          var a3 = n3.arcList;
          while (a3 != null) {
            var m3 = a3.node;
            if (m3.marked) {
              a3 = a3.next;
              continue;
            }
            m3.marked = true;
            m3.depth = n3.depth + 1;
            m3.parent = n3.parent;
            if (m3.depth <= maxDepth) this._que[c++ + front] = m3;
            a3 = a3.next;
          }
          front++;
          c--;
        }
    },
    toString: function() {
      var s = "{ Graph size: " + this._size + " }";
      if (this._size == 0) return s;
      s += "\n[\n";
      var node = this._nodeList;
      while (node != null) {
        s += "  " + node.toString() + "\n";
        node = node.next;
      }
      s += "]";
      return s;
    },
    free: function() {
      var node = this._nodeList;
      while (node != null) {
        var nextNode = node.next;
        var arc = node.arcList;
        while (arc != null) {
          var nextArc = arc.next;
          arc.next = arc.prev = null;
          arc.node = null;
          arc = nextArc;
        }
        node.free();
        node = nextNode;
      }
      this._nodeList = null;
      var _g1 = 0;
      var _g = this._stack.length;
      while (_g1 < _g) {
        var i = _g1++;
        this._stack[i] = null;
      }
      this._stack = null;
      var _g11 = 0;
      var _g2 = this._que.length;
      while (_g11 < _g2) {
        var i1 = _g11++;
        this._que[i1] = null;
      }
      this._que = null;
      this._iterator = null;
    },
    contains: function(x) {
      var found = false;
      var node = this._nodeList;
      while (node != null) {
        if (node.val == x) return true;
        node = node.next;
      }
      return false;
    },
    remove: function(x) {
      var found = false;
      var node = this._nodeList;
      while (node != null) {
        var nextNode = node.next;
        if (node.val == x) {
          this.unlink(node);
          node.val = null;
          node.next = node.prev = null;
          node.arcList = null;
          found = true;
          this._size--;
        }
        node = nextNode;
      }
      return found;
    },
    clear: function(purge) {
      if (purge == null) purge = false;
      if (purge) {
        var node = this._nodeList;
        while (node != null) {
          var hook = node.next;
          var arc = node.arcList;
          while (arc != null) {
            var hook1 = arc.next;
            arc.free();
            arc = hook1;
          }
          node.free();
          node = hook;
        }
      }
      this._nodeList = null;
      this._size = 0;
      this._stack = new Array();
      this._que = new Array();
    },
    iterator: function() {
      if (this.reuseIterator) {
        if (this._iterator == null) this._iterator = new de.polygonal.ds.GraphIterator(this);
        else this._iterator.reset();
        return this._iterator;
      } else return new de.polygonal.ds.GraphIterator(this);
    },
    nodeIterator: function() {
      return new de.polygonal.ds.GraphNodeIterator(this);
    },
    arcIterator: function() {
      return new de.polygonal.ds.GraphArcIterator(this);
    },
    size: function() {
      return this._size;
    },
    isEmpty: function() {
      return this._size == 0;
    },
    toArray: function() {
      var a = de.polygonal.ds.ArrayUtil.alloc(this._size);
      var node = this._nodeList;
      while (node != null) {
        a.push(node.val);
        node = node.next;
      }
      return a;
    },
    clone: function(assign, copier) {
      if (assign == null) assign = true;
      var copy = new de.polygonal.ds.Graph(this.maxSize);
      if (this._nodeList == null) return copy;
      var t = new Array();
      var i = 0;
      var n = this._nodeList;
      if (assign)
        while (n != null) {
          var m = copy.addNode(copy.createNode(n.val));
          t[i++] = m;
          n = n.next;
        } else if (copier == null) {
          var c = null;
          while (n != null) {
            c = n.val;
            var m1 = copy.addNode(copy.createNode(c.clone()));
            t[i++] = m1;
            n = n.next;
          }
        } else
          while (n != null) {
            var m2 = copy.addNode(copy.createNode(copier(n.val)));
            t[i++] = m2;
            n = n.next;
          }
      i = 0;
      n = this._nodeList;
      while (n != null) {
        var m3 = t[i++];
        var a = n.arcList;
        while (a != null) {
          m3.addArc(a.node, a.cost);
          a = a.next;
        }
        n = n.next;
      }
      return copy;
    },
    _DFSRecursiveVisit: function(node, preflight, userData) {
      node.marked = true;
      var v = node.val;
      if (!v.visit(false, userData)) return false;
      var a = node.arcList;
      while (a != null) {
        var m = a.node;
        if (m.marked) {
          a = a.next;
          continue;
        }
        a.node.parent = node;
        a.node.depth = node.depth + 1;
        if (preflight) {
          v = m.val;
          if (v.visit(true, userData)) {
            if (!this._DFSRecursiveVisit(m, true, userData)) return false;
          }
        } else if (!this._DFSRecursiveVisit(m, false, userData)) return false;
        a = a.next;
      }
      return true;
    },
    _DFSRecursiveProcess: function(node, process, preflight, userData) {
      node.marked = true;
      if (!process(node, false, userData)) return false;
      var a = node.arcList;
      while (a != null) {
        var m = a.node;
        if (m.marked) {
          a = a.next;
          continue;
        }
        a.node.parent = node;
        a.node.depth = node.depth + 1;
        if (preflight) {
          if (process(m, true, userData)) {
            if (!this._DFSRecursiveProcess(m, process, true, userData)) return false;
          }
        } else if (!this._DFSRecursiveProcess(m, process, false, userData)) return false;
        a = a.next;
      }
      return true;
    },
    __class__: de.polygonal.ds.Graph
  };
  de.polygonal.ds.GraphIterator = function(f) {
    this._f = f; {
      this._node = this._f._nodeList;
      this;
    }
  };
  $hxClasses["de.polygonal.ds.GraphIterator"] = de.polygonal.ds.GraphIterator;
  de.polygonal.ds.GraphIterator.__name__ = ["de", "polygonal", "ds", "GraphIterator"];
  de.polygonal.ds.GraphIterator.__interfaces__ = [de.polygonal.ds.Itr];
  de.polygonal.ds.GraphIterator.prototype = {
    _f: null,
    _node: null,
    reset: function() {
      this._node = this._f._nodeList;
      return this;
    },
    hasNext: function() {
      return this._node != null;
    },
    next: function() {
      var x = this._node.val;
      this._node = this._node.next;
      return x;
    },
    remove: function() {
      throw "unsupported operation";
    },
    __nodeList: function(f) {
      return f._nodeList;
    },
    __class__: de.polygonal.ds.GraphIterator
  };
  de.polygonal.ds.GraphNodeIterator = function(f) {
    this._f = f; {
      this._node = this._f._nodeList;
      this;
    }
  };
  $hxClasses["de.polygonal.ds.GraphNodeIterator"] = de.polygonal.ds.GraphNodeIterator;
  de.polygonal.ds.GraphNodeIterator.__name__ = ["de", "polygonal", "ds", "GraphNodeIterator"];
  de.polygonal.ds.GraphNodeIterator.__interfaces__ = [de.polygonal.ds.Itr];
  de.polygonal.ds.GraphNodeIterator.prototype = {
    _f: null,
    _node: null,
    reset: function() {
      this._node = this._f._nodeList;
      return this;
    },
    hasNext: function() {
      return this._node != null;
    },
    next: function() {
      var x = this._node;
      this._node = this._node.next;
      return x;
    },
    remove: function() {
      throw "unsupported operation";
    },
    __nodeList: function(f) {
      return f._nodeList;
    },
    __class__: de.polygonal.ds.GraphNodeIterator
  };
  de.polygonal.ds.GraphArcIterator = function(f) {
    this._f = f; {
      this._node = this._f._nodeList;
      this._arc = this._node.arcList;
      this;
    }
  };
  $hxClasses["de.polygonal.ds.GraphArcIterator"] = de.polygonal.ds.GraphArcIterator;
  de.polygonal.ds.GraphArcIterator.__name__ = ["de", "polygonal", "ds", "GraphArcIterator"];
  de.polygonal.ds.GraphArcIterator.__interfaces__ = [de.polygonal.ds.Itr];
  de.polygonal.ds.GraphArcIterator.prototype = {
    _f: null,
    _node: null,
    _arc: null,
    reset: function() {
      this._node = this._f._nodeList;
      this._arc = this._node.arcList;
      return this;
    },
    hasNext: function() {
      return this._arc != null && this._node != null;
    },
    next: function() {
      var x = this._arc;
      this._arc = this._arc.next;
      if (this._arc == null) {
        this._node = this._node.next;
        if (this._node != null) this._arc = this._node.arcList;
      }
      return x;
    },
    remove: function() {
      throw "unsupported operation";
    },
    __nodeList: function(f) {
      return f._nodeList;
    },
    __class__: de.polygonal.ds.GraphArcIterator
  };
  de.polygonal.ds.GraphArc = function(node, cost) {
    this.node = node;
    this.cost = cost;
    this.next = null;
    this.prev = null;
    this.key = de.polygonal.ds.HashKey._counter++;
  };
  $hxClasses["de.polygonal.ds.GraphArc"] = de.polygonal.ds.GraphArc;
  de.polygonal.ds.GraphArc.__name__ = ["de", "polygonal", "ds", "GraphArc"];
  de.polygonal.ds.GraphArc.__interfaces__ = [de.polygonal.ds.Hashable];
  de.polygonal.ds.GraphArc.prototype = {
    key: null,
    node: null,
    cost: null,
    next: null,
    prev: null,
    free: function() {
      this.node = null;
      this.next = this.prev = null;
    },
    val: function() {
      return this.node.val;
    },
    __class__: de.polygonal.ds.GraphArc
  };
  de.polygonal.ds.GraphNode = function(graph, x) {
    this.val = x;
    this.arcList = null;
    this.marked = false;
    this.key = de.polygonal.ds.HashKey._counter++;
    this._graph = graph;
  };
  $hxClasses["de.polygonal.ds.GraphNode"] = de.polygonal.ds.GraphNode;
  de.polygonal.ds.GraphNode.__name__ = ["de", "polygonal", "ds", "GraphNode"];
  de.polygonal.ds.GraphNode.__interfaces__ = [de.polygonal.ds.Hashable];
  de.polygonal.ds.GraphNode.prototype = {
    key: null,
    val: null,
    parent: null,
    depth: null,
    next: null,
    prev: null,
    arcList: null,
    marked: null,
    _graph: null,
    free: function() {
      this.val = null;
      this.next = this.prev = null;
      this.arcList = null;
      this._graph = null;
    },
    iterator: function() {
      return new de.polygonal.ds.NodeValIterator(this);
    },
    isConnected: function(target) {
      return this.getArc(target) != null;
    },
    isMutuallyConnected: function(target) {
      return this.getArc(target) != null && target.getArc(this) != null;
    },
    getArc: function(target) {
      var found = false;
      var a = this.arcList;
      while (a != null) {
        if (a.node == target) {
          found = true;
          break;
        }
        a = a.next;
      }
      if (found) return a;
      else return null;
    },
    addArc: function(target, cost) {
      if (cost == null) cost = 1.;
      var arc;
      if (this._graph.borrowArc != null) arc = this._graph.borrowArc(target, cost);
      else arc = new de.polygonal.ds.GraphArc(target, cost);
      arc.next = this.arcList;
      if (this.arcList != null) this.arcList.prev = arc;
      this.arcList = arc;
    },
    removeArc: function(target) {
      var arc = this.getArc(target);
      if (arc != null) {
        if (arc.prev != null) arc.prev.next = arc.next;
        if (arc.next != null) arc.next.prev = arc.prev;
        if (this.arcList == arc) this.arcList = arc.next;
        arc.next = null;
        arc.prev = null;
        arc.node = null;
        if (this._graph.returnArc != null) this._graph.returnArc(arc);
        return true;
      }
      return false;
    },
    removeSingleArcs: function() {
      var arc = this.arcList;
      while (arc != null) {
        this.removeArc(arc.node);
        arc = arc.next;
      }
    },
    removeMutualArcs: function() {
      var arc = this.arcList;
      while (arc != null) {
        arc.node.removeArc(this);
        this.removeArc(arc.node);
        arc = arc.next;
      }
      this.arcList = null;
    },
    getArcCount: function() {
      var c = 0;
      var arc = this.arcList;
      while (arc != null) {
        c++;
        arc = arc.next;
      }
      return c;
    },
    toString: function() {
      var t = new Array();
      if (this.arcList != null) {
        var arc = this.arcList;
        while (arc != null) {
          t.push(Std.string(arc.node.val));
          arc = arc.next;
        }
      }
      if (t.length > 0) return "{ GraphNode val: " + Std.string(this.val) + ", connected to: " + t.join(",") + " }";
      else return "{ GraphNode val: " + Std.string(this.val) + " }";
    },
    __class__: de.polygonal.ds.GraphNode
  };
  de.polygonal.ds.NodeValIterator = function(node) {
    this._node = node; {
      this._arcList = this._node.arcList;
      this;
    }
  };
  $hxClasses["de.polygonal.ds.NodeValIterator"] = de.polygonal.ds.NodeValIterator;
  de.polygonal.ds.NodeValIterator.__name__ = ["de", "polygonal", "ds", "NodeValIterator"];
  de.polygonal.ds.NodeValIterator.__interfaces__ = [de.polygonal.ds.Itr];
  de.polygonal.ds.NodeValIterator.prototype = {
    _node: null,
    _arcList: null,
    reset: function() {
      this._arcList = this._node.arcList;
      return this;
    },
    hasNext: function() {
      return this._arcList != null;
    },
    next: function() {
      var val = this._arcList.node.val;
      this._arcList = this._arcList.next;
      return val;
    },
    remove: function() {
      throw "unsupported operation";
    },
    __class__: de.polygonal.ds.NodeValIterator
  };
  de.polygonal.ds.HashKey = function() {};
  $hxClasses["de.polygonal.ds.HashKey"] = de.polygonal.ds.HashKey;
  de.polygonal.ds.HashKey.__name__ = ["de", "polygonal", "ds", "HashKey"];
  de.polygonal.ds.HashKey.next = function() {
    return de.polygonal.ds.HashKey._counter++;
  };
  de.polygonal.ds.Heap = function(reservedSize, maxSize) {
    if (maxSize == null) maxSize = -1;
    if (reservedSize == null) reservedSize = 0;
    this.maxSize = -1;
    if (reservedSize > 0) this._a = de.polygonal.ds.ArrayUtil.alloc(reservedSize + 1);
    else this._a = new Array();
    this._a[0] = null;
    this._size = 0;
    this._iterator = null;
    this.key = de.polygonal.ds.HashKey._counter++;
    this.reuseIterator = false;
  };
  $hxClasses["de.polygonal.ds.Heap"] = de.polygonal.ds.Heap;
  de.polygonal.ds.Heap.__name__ = ["de", "polygonal", "ds", "Heap"];
  de.polygonal.ds.Heap.__interfaces__ = [de.polygonal.ds.Collection];
  de.polygonal.ds.Heap.prototype = {
    key: null,
    maxSize: null,
    reuseIterator: null,
    _a: null,
    _size: null,
    _iterator: null,
    pack: function() {
      if (this._a.length - 1 == this._size) return;
      var tmp = this._a;
      this._a = de.polygonal.ds.ArrayUtil.alloc(this._size + 1);
      this._a[0] = null;
      var _g1 = 1;
      var _g = this._size + 1;
      while (_g1 < _g) {
        var i = _g1++;
        this._a[i] = tmp[i];
      }
      var _g11 = this._size + 1;
      var _g2 = tmp.length;
      while (_g11 < _g2) {
        var i1 = _g11++;
        tmp[i1] = null;
      }
    },
    reserve: function(x) {
      if (this._size == x) return;
      var tmp = this._a;
      this._a = de.polygonal.ds.ArrayUtil.alloc(x + 1);
      this._a[0] = null;
      if (this._size < x) {
        var _g1 = 1;
        var _g = this._size + 1;
        while (_g1 < _g) {
          var i = _g1++;
          this._a[i] = tmp[i];
        }
      }
    },
    top: function() {
      return this._a[1];
    },
    bottom: function() {
      if (this._size == 1) return this._a[1];
      var a = this._a[1];
      var b;
      var _g1 = 2;
      var _g = this._size + 1;
      while (_g1 < _g) {
        var i = _g1++;
        b = this._a[i];
        if (a.compare(b) > 0) a = b;
      }
      return a;
    },
    add: function(x) {
      this.__set(++this._size, x);
      x.position = this._size;
      this._upheap(this._size);
    },
    pop: function() {
      var x = this._a[1];
      this._a[1] = this._a[this._size];
      this._downheap(1);
      this._size--;
      return x;
    },
    replace: function(x) {
      this._a[1] = x;
      this._downheap(1);
    },
    change: function(x, hint) {
      if (hint >= 0) this._upheap(x.position);
      else {
        this._downheap(x.position);
        this._upheap(this._size);
      }
    },
    sort: function() {
      if (this._size == 0) return new Array();
      var a = de.polygonal.ds.ArrayUtil.alloc(this._size);
      var h = de.polygonal.ds.ArrayUtil.alloc(this._size + 1);
      de.polygonal.ds.ArrayUtil.copy(this._a, h, 0, this._size + 1);
      var k = this._size;
      var j = 0;
      while (k > 0) {
        a[j++] = h[1];
        h[1] = h[k];
        var i = 1;
        var c = i << 1;
        var v = h[i];
        var s = k - 1;
        while (c < k) {
          if (c < s) {
            if (h[c].compare(h[c + 1]) < 0) c++;
          }
          var u = h[c];
          if (v.compare(u) < 0) {
            h[i] = u;
            i = c;
            c <<= 1;
          } else break;
        }
        h[i] = v;
        k--;
      }
      return a;
    },
    height: function() {
      return 32 - de.polygonal.ds.Bits.nlz(this._size);
    },
    toString: function() {
      var s = "{ Heap size: " + this._size + " }";
      if (this._size == 0) return s;
      var tmp = new de.polygonal.ds.Heap();
      var _g1 = 1;
      var _g = this._size + 1;
      while (_g1 < _g) {
        var i = _g1++;
        var w = new de.polygonal.ds._Heap.HeapElementWrapper(this._a[i]);
        tmp._a[i] = w;
      }
      tmp._size = this._size;
      s += "\n[ front\n";
      var i1 = 0;
      while (tmp._size > 0) s += de.polygonal.Printf.format("  %4d -> %s\n", [i1++, Std.string(tmp.pop())]);
      s += "]";
      return s;
    },
    repair: function() {
      var i = this._size >> 1;
      while (i >= 1) {
        this._heapify(i, this._size);
        i--;
      }
    },
    free: function() {
      var _g1 = 0;
      var _g = this._a.length;
      while (_g1 < _g) {
        var i = _g1++;
        this._a[i] = null;
      }
      this._a = null;
      if (this._iterator != null) {
        this._iterator.free();
        this._iterator = null;
      }
    },
    contains: function(x) {
      var position = x.position;
      return position > 0 && position <= this._size && this._a[position] == x;
    },
    remove: function(x) {
      if (this._size == 0) return false;
      else {
        if (x.position == 1) this.pop();
        else {
          var p = x.position;
          this._a[p] = this._a[this._size];
          this._downheap(p);
          this._upheap(p);
          this._size--;
        }
        return true;
      }
    },
    clear: function(purge) {
      if (purge == null) purge = false;
      if (purge) {
        var _g1 = 1;
        var _g = this._a.length;
        while (_g1 < _g) {
          var i = _g1++;
          this._a[i] = null;
        }
      }
      this._size = 0;
    },
    iterator: function() {
      if (this.reuseIterator) {
        if (this._iterator == null) this._iterator = new de.polygonal.ds.HeapIterator(this);
        else this._iterator.reset();
        return this._iterator;
      } else return new de.polygonal.ds.HeapIterator(this);
    },
    size: function() {
      return this._size;
    },
    isEmpty: function() {
      return this._size == 0;
    },
    toArray: function() {
      var a = de.polygonal.ds.ArrayUtil.alloc(this._size);
      var _g1 = 1;
      var _g = this._size + 1;
      while (_g1 < _g) {
        var i = _g1++;
        a[i - 1] = this._a[i];
      }
      return a;
    },
    clone: function(assign, copier) {
      if (assign == null) assign = true;
      var copy = new de.polygonal.ds.Heap(this._size, this.maxSize);
      if (this._size == 0) return copy;
      if (assign) {
        var _g1 = 1;
        var _g = this._size + 1;
        while (_g1 < _g) {
          var i = _g1++;
          copy._a[i] = this._a[i];
        }
      } else if (copier == null) {
        var _g11 = 1;
        var _g2 = this._size + 1;
        while (_g11 < _g2) {
          var i1 = _g11++;
          var e = this._a[i1];
          var c = e.clone();
          c.position = e.position;
          copy._a[i1] = c;
        }
      } else {
        var _g12 = 1;
        var _g3 = this._size + 1;
        while (_g12 < _g3) {
          var i2 = _g12++;
          var e1 = this._a[i2];
          var c1 = copier(e1);
          c1.position = e1.position;
          copy._a[i2] = c1;
        }
      }
      copy._size = this._size;
      return copy;
    },
    _upheap: function(i) {
      var p = i >> 1;
      var a = this._a[i];
      var b;
      while (p > 0) {
        b = this._a[p];
        if (a.compare(b) > 0) {
          this._a[i] = b;
          b.position = i;
          i = p;
          p >>= 1;
        } else break;
      }
      a.position = i;
      this._a[i] = a;
    },
    _downheap: function(i) {
      var c = i << 1;
      var a = this._a[i];
      var s = this._size - 1;
      while (c < this._size) {
        if (c < s) {
          if (this._a[c].compare(this._a[c + 1]) < 0) c++;
        }
        var b = this._a[c];
        if (a.compare(b) < 0) {
          this._a[i] = b;
          b.position = i;
          a.position = c;
          i = c;
          c <<= 1;
        } else break;
      }
      a.position = i;
      this._a[i] = a;
    },
    _heapify: function(p, s) {
      var l = p << 1;
      var r = l + 1;
      var max = p;
      if (l <= s && this._a[l].compare(this._a[max]) > 0) max = l;
      if (l + 1 <= s && this._a[l + 1].compare(this._a[max]) > 0) max = r;
      if (max != p) {
        var a = this._a[max];
        var b = this._a[p];
        this._a[max] = b;
        this._a[p] = a;
        var tmp = a.position;
        a.position = b.position;
        b.position = tmp;
        this._heapify(max, s);
      }
    },
    __get: function(i) {
      return this._a[i];
    },
    __set: function(i, x) {
      this._a[i] = x;
    },
    __class__: de.polygonal.ds.Heap
  };
  de.polygonal.ds.HeapIterator = function(f) {
    this._f = f;
    this._a = new Array();
    this._a[0] = null;
    this.reset();
  };
  $hxClasses["de.polygonal.ds.HeapIterator"] = de.polygonal.ds.HeapIterator;
  de.polygonal.ds.HeapIterator.__name__ = ["de", "polygonal", "ds", "HeapIterator"];
  de.polygonal.ds.HeapIterator.__interfaces__ = [de.polygonal.ds.Itr];
  de.polygonal.ds.HeapIterator.prototype = {
    _f: null,
    _a: null,
    _i: null,
    _s: null,
    free: function() {
      this._a = null;
    },
    reset: function() {
      this._s = this._f._size + 1;
      this._i = 1;
      var a = this._f._a;
      var _g1 = 1;
      var _g = this._s;
      while (_g1 < _g) {
        var i = _g1++;
        this._a[i] = a[i];
      }
      return this;
    },
    hasNext: function() {
      return this._i < this._s;
    },
    next: function() {
      return this._a[this._i++];
    },
    remove: function() {
      this._f.remove(this._a[this._i - 1]);
    },
    __a: function(f) {
      return f._a;
    },
    __class__: de.polygonal.ds.HeapIterator
  };
  de.polygonal.ds._Heap = {};
  de.polygonal.ds._Heap.HeapElementWrapper = function(e) {
    this.e = e;
    this.position = e.position;
  };
  $hxClasses["de.polygonal.ds._Heap.HeapElementWrapper"] = de.polygonal.ds._Heap.HeapElementWrapper;
  de.polygonal.ds._Heap.HeapElementWrapper.__name__ = ["de", "polygonal", "ds", "_Heap", "HeapElementWrapper"];
  de.polygonal.ds._Heap.HeapElementWrapper.__interfaces__ = [de.polygonal.ds.Heapable];
  de.polygonal.ds._Heap.HeapElementWrapper.prototype = {
    position: null,
    e: null,
    compare: function(other) {
      return this.e.compare(other.e);
    },
    toString: function() {
      return Std.string(this.e);
    },
    __class__: de.polygonal.ds._Heap.HeapElementWrapper
  };
  de.polygonal.ds.error = {};
  de.polygonal.ds.error.Assert = function() {};
  $hxClasses["de.polygonal.ds.error.Assert"] = de.polygonal.ds.error.Assert;
  de.polygonal.ds.error.Assert.__name__ = ["de", "polygonal", "ds", "error", "Assert"];
  var haxe = {};
  haxe._EnumFlags = {};
  haxe._EnumFlags.EnumFlags_Impl_ = function() {};
  $hxClasses["haxe._EnumFlags.EnumFlags_Impl_"] = haxe._EnumFlags.EnumFlags_Impl_;
  haxe._EnumFlags.EnumFlags_Impl_.__name__ = ["haxe", "_EnumFlags", "EnumFlags_Impl_"];
  haxe._EnumFlags.EnumFlags_Impl_._new = function(i) {
    if (i == null) i = 0;
    return i;
  };
  haxe._EnumFlags.EnumFlags_Impl_.has = function(this1, v) {
    return (this1 & 1 << v[1]) != 0;
  };
  haxe._EnumFlags.EnumFlags_Impl_.set = function(this1, v) {
    this1 |= 1 << v[1];
  };
  haxe._EnumFlags.EnumFlags_Impl_.unset = function(this1, v) {
    this1 &= 268435455 - (1 << v[1]);
  };
  haxe._EnumFlags.EnumFlags_Impl_.ofInt = function(i) {
    return i;
  };
  haxe._EnumFlags.EnumFlags_Impl_.toInt = function(this1) {
    return this1;
  };
  haxe.Int64 = function(high, low) {
    this.high = high | 0;
    this.low = low | 0;
  };
  $hxClasses["haxe.Int64"] = haxe.Int64;
  haxe.Int64.__name__ = ["haxe", "Int64"];
  haxe.Int64.ushr32 = function(v, n) {
    return v >>> n;
  };
  haxe.Int64.make = function(high, low) {
    return new haxe.Int64(high, low);
  };
  haxe.Int64.ofInt = function(x) {
    return new haxe.Int64(x >> 31, x);
  };
  haxe.Int64.toInt = function(x) {
    if (x.high != 0) {
      if (x.high < 0) return -haxe.Int64.toInt(haxe.Int64.neg(x));
      throw "Overflow";
    }
    return x.low;
  };
  haxe.Int64.getLow = function(x) {
    return x.low;
  };
  haxe.Int64.getHigh = function(x) {
    return x.high;
  };
  haxe.Int64.add = function(a, b) {
    var high = a.high + b.high | 0;
    var low = a.low + b.low | 0;
    if (haxe.Int64.uicompare(low, a.low) < 0) high++;
    return new haxe.Int64(high, low);
  };
  haxe.Int64.sub = function(a, b) {
    var high = a.high - b.high | 0;
    var low = a.low - b.low | 0;
    if (haxe.Int64.uicompare(a.low, b.low) < 0) high--;
    return new haxe.Int64(high, low);
  };
  haxe.Int64.mul = function(a, b) {
    var mask = 65535;
    var al = a.low & mask;
    var ah = a.low >>> 16;
    var bl = b.low & mask;
    var bh = b.low >>> 16;
    var p00 = al * bl;
    var p10 = ah * bl;
    var p01 = al * bh;
    var p11 = ah * bh;
    var low = p00;
    var high = p11 + (p01 >>> 16) + (p10 >>> 16) | 0;
    p01 = p01 << 16 | 0;
    low = low + p01 | 0;
    if (haxe.Int64.uicompare(low, p01) < 0) high = high + 1 | 0;
    p10 = p10 << 16 | 0;
    low = low + p10 | 0;
    if (haxe.Int64.uicompare(low, p10) < 0) high = high + 1 | 0;
    high = high + (function($this) {
      var $r;
      var a1 = a.low;
      var b1 = b.high;
      $r = (a1 * (b1 >>> 16) << 16 | 0) + a1 * (b1 & 65535) | 0;
      return $r;
    }(this)) | 0;
    high = high + (function($this) {
      var $r;
      var a2 = a.high;
      var b2 = b.low;
      $r = (a2 * (b2 >>> 16) << 16 | 0) + a2 * (b2 & 65535) | 0;
      return $r;
    }(this)) | 0;
    return new haxe.Int64(high, low);
  };
  haxe.Int64.divMod = function(modulus, divisor) {
    var quotient = new haxe.Int64(0, 0);
    var mask_high = 0;
    var mask_low = 1;
    divisor = new haxe.Int64(divisor.high, divisor.low);
    while (divisor.high >= 0) {
      var cmp = haxe.Int64.ucompare(divisor, modulus);
      divisor.high = divisor.high << 1 | 0 | divisor.low >>> 31 | 0;
      divisor.low = divisor.low << 1 | 0;
      mask_high = mask_high << 1 | 0 | mask_low >>> 31 | 0;
      mask_low = mask_low << 1 | 0;
      if (cmp >= 0) break;
    }
    while ((mask_low | mask_high | 0) != 0) {
      if (haxe.Int64.ucompare(modulus, divisor) >= 0) {
        quotient.high = quotient.high | mask_high | 0;
        quotient.low = quotient.low | mask_low | 0;
        modulus = haxe.Int64.sub(modulus, divisor);
      }
      mask_low = mask_low >>> 1 | (mask_high << 31 | 0) | 0;
      mask_high = mask_high >>> 1;
      divisor.low = divisor.low >>> 1 | (divisor.high << 31 | 0) | 0;
      divisor.high = divisor.high >>> 1;
    }
    return { quotient: quotient, modulus: modulus };
  };
  haxe.Int64.div = function(a, b) {
    if (b.high == 0) {
      var _g = b.low;
      switch (_g) {
        case 0:
          throw "divide by zero";
          break;
        case 1:
          return new haxe.Int64(a.high, a.low);
      }
    }
    var sign = (a.high < 0 || b.high < 0) && !(a.high < 0 && b.high < 0);
    if (a.high < 0) a = haxe.Int64.neg(a);
    if (b.high < 0) b = haxe.Int64.neg(b);
    var q = haxe.Int64.divMod(a, b).quotient;
    if (sign) return haxe.Int64.neg(q);
    else return q;
  };
  haxe.Int64.mod = function(a, b) {
    if (b.high == 0) {
      var _g = b.low;
      switch (_g) {
        case 0:
          throw "modulus by zero";
          break;
        case 1:
          return new haxe.Int64(0, 0);
      }
    }
    var sign = a.high < 0;
    if (a.high < 0) a = haxe.Int64.neg(a);
    if (b.high < 0) b = haxe.Int64.neg(b);
    var m = haxe.Int64.divMod(a, b).modulus;
    if (sign) return haxe.Int64.neg(m);
    else return m;
  };
  haxe.Int64.shl = function(a, b) {
    if ((b & 63) == 0) return a;
    else if ((b & 63) < 32) return new haxe.Int64(a.high << b | a.low >>> (32 - (b & 63) | 0), a.low << b);
    else return new haxe.Int64(a.low << (b - 32 | 0), 0);
  };
  haxe.Int64.shr = function(a, b) {
    if ((b & 63) == 0) return a;
    else if ((b & 63) < 32) return new haxe.Int64(a.high >> b, a.low >>> b | a.high << (32 - (b & 63) | 0));
    else return new haxe.Int64(a.high >> 31, a.high >> (b - 32 | 0));
  };
  haxe.Int64.ushr = function(a, b) {
    if ((b & 63) == 0) return a;
    else if ((b & 63) < 32) return new haxe.Int64(a.high >>> b, a.low >>> b | a.high << (32 - (b & 63) | 0));
    else return new haxe.Int64(0, a.high >>> (b - 32 | 0));
  };
  haxe.Int64.and = function(a, b) {
    return new haxe.Int64(a.high & b.high, a.low & b.low);
  };
  haxe.Int64.or = function(a, b) {
    return new haxe.Int64(a.high | b.high, a.low | b.low);
  };
  haxe.Int64.xor = function(a, b) {
    return new haxe.Int64(a.high ^ b.high, a.low ^ b.low);
  };
  haxe.Int64.neg = function(a) {
    var high = ~a.high | 0;
    var low = -a.low | 0;
    if (low == 0) high++;
    return new haxe.Int64(high, low);
  };
  haxe.Int64.isNeg = function(a) {
    return a.high < 0;
  };
  haxe.Int64.isZero = function(a) {
    return (a.high | a.low) == 0;
  };
  haxe.Int64.uicompare = function(a, b) {
    if (a < 0) {
      if (b < 0) return ~b - ~a | 0;
      else return 1;
    } else if (b < 0) return -1;
    else return a - b | 0;
  };
  haxe.Int64.compare = function(a, b) {
    var v = a.high - b.high | 0;
    if (v != 0) return v;
    else return haxe.Int64.uicompare(a.low, b.low);
  };
  haxe.Int64.ucompare = function(a, b) {
    var v = haxe.Int64.uicompare(a.high, b.high);
    if (v != 0) return v;
    else return haxe.Int64.uicompare(a.low, b.low);
  };
  haxe.Int64.toStr = function(a) {
    return a.toString();
  };
  haxe.Int64.prototype = {
    high: null,
    low: null,
    toString: function() {
      if ((this.high | this.low) == 0) return "0";
      var str = "";
      var neg = false;
      var i = this;
      if (i.high < 0) {
        neg = true;
        i = haxe.Int64.neg(i);
      }
      var ten = new haxe.Int64(0, 10);
      while (!((i.high | i.low) == 0)) {
        var r = haxe.Int64.divMod(i, ten);
        str = r.modulus.low + str;
        i = r.quotient;
      }
      if (neg) str = "-" + str;
      return str;
    },
    __class__: haxe.Int64
  };
  haxe.ds = {};
  haxe.ds.BalancedTree = function() {};
  $hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree;
  haxe.ds.BalancedTree.__name__ = ["haxe", "ds", "BalancedTree"];
  haxe.ds.BalancedTree.prototype = {
    root: null,
    set: function(key, value) {
      this.root = this.setLoop(key, value, this.root);
    },
    get: function(key) {
      var node = this.root;
      while (node != null) {
        var c = this.compare(key, node.key);
        if (c == 0) return node.value;
        if (c < 0) node = node.left;
        else node = node.right;
      }
      return null;
    },
    remove: function(key) {
      try {
        this.root = this.removeLoop(key, this.root);
        return true;
      } catch (e) {
        if (js.Boot.__instanceof(e, String)) {
          return false;
        } else throw (e);
      }
    },
    exists: function(key) {
      var node = this.root;
      while (node != null) {
        var c = this.compare(key, node.key);
        if (c == 0) return true;
        else if (c < 0) node = node.left;
        else node = node.right;
      }
      return false;
    },
    iterator: function() {
      var ret = [];
      this.iteratorLoop(this.root, ret);
      return HxOverrides.iter(ret);
    },
    keys: function() {
      var ret = [];
      this.keysLoop(this.root, ret);
      return HxOverrides.iter(ret);
    },
    setLoop: function(k, v, node) {
      if (node == null) return new haxe.ds.TreeNode(null, k, v, null);
      var c = this.compare(k, node.key);
      if (c == 0) return new haxe.ds.TreeNode(node.left, k, v, node.right, node == null ? 0 : node._height);
      else if (c < 0) {
        var nl = this.setLoop(k, v, node.left);
        return this.balance(nl, node.key, node.value, node.right);
      } else {
        var nr = this.setLoop(k, v, node.right);
        return this.balance(node.left, node.key, node.value, nr);
      }
    },
    removeLoop: function(k, node) {
      if (node == null) throw "Not_found";
      var c = this.compare(k, node.key);
      if (c == 0) return this.merge(node.left, node.right);
      else if (c < 0) return this.balance(this.removeLoop(k, node.left), node.key, node.value, node.right);
      else return this.balance(node.left, node.key, node.value, this.removeLoop(k, node.right));
    },
    iteratorLoop: function(node, acc) {
      if (node != null) {
        this.iteratorLoop(node.left, acc);
        acc.push(node.value);
        this.iteratorLoop(node.right, acc);
      }
    },
    keysLoop: function(node, acc) {
      if (node != null) {
        this.keysLoop(node.left, acc);
        acc.push(node.key);
        this.keysLoop(node.right, acc);
      }
    },
    merge: function(t1, t2) {
      if (t1 == null) return t2;
      if (t2 == null) return t1;
      var t = this.minBinding(t2);
      return this.balance(t1, t.key, t.value, this.removeMinBinding(t2));
    },
    minBinding: function(t) {
      if (t == null) throw "Not_found";
      else if (t.left == null) return t;
      else return this.minBinding(t.left);
    },
    removeMinBinding: function(t) {
      if (t.left == null) return t.right;
      else return this.balance(this.removeMinBinding(t.left), t.key, t.value, t.right);
    },
    balance: function(l, k, v, r) {
      var hl;
      if (l == null) hl = 0;
      else hl = l._height;
      var hr;
      if (r == null) hr = 0;
      else hr = r._height;
      if (hl > hr + 2) {
        if ((function($this) {
            var $r;
            var _this = l.left;
            $r = _this == null ? 0 : _this._height;
            return $r;
          }(this)) >= (function($this) {
            var $r;
            var _this1 = l.right;
            $r = _this1 == null ? 0 : _this1._height;
            return $r;
          }(this))) return new haxe.ds.TreeNode(l.left, l.key, l.value, new haxe.ds.TreeNode(l.right, k, v, r));
        else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left, l.key, l.value, l.right.left), l.right.key, l.right.value, new haxe.ds.TreeNode(l.right.right, k, v, r));
      } else if (hr > hl + 2) {
        if ((function($this) {
            var $r;
            var _this2 = r.right;
            $r = _this2 == null ? 0 : _this2._height;
            return $r;
          }(this)) > (function($this) {
            var $r;
            var _this3 = r.left;
            $r = _this3 == null ? 0 : _this3._height;
            return $r;
          }(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l, k, v, r.left), r.key, r.value, r.right);
        else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l, k, v, r.left.left), r.left.key, r.left.value, new haxe.ds.TreeNode(r.left.right, r.key, r.value, r.right));
      } else return new haxe.ds.TreeNode(l, k, v, r, (hl > hr ? hl : hr) + 1);
    },
    compare: function(k1, k2) {
      return Reflect.compare(k1, k2);
    },
    toString: function() {
      return "{" + this.root.toString() + "}";
    },
    __class__: haxe.ds.BalancedTree
  };
  haxe.ds.TreeNode = function(l, k, v, r, h) {
    if (h == null) h = -1;
    this.left = l;
    this.key = k;
    this.value = v;
    this.right = r;
    if (h == -1) this._height = ((function($this) {
      var $r;
      var _this = $this.left;
      $r = _this == null ? 0 : _this._height;
      return $r;
    }(this)) > (function($this) {
      var $r;
      var _this1 = $this.right;
      $r = _this1 == null ? 0 : _this1._height;
      return $r;
    }(this)) ? (function($this) {
      var $r;
      var _this2 = $this.left;
      $r = _this2 == null ? 0 : _this2._height;
      return $r;
    }(this)) : (function($this) {
      var $r;
      var _this3 = $this.right;
      $r = _this3 == null ? 0 : _this3._height;
      return $r;
    }(this))) + 1;
    else this._height = h;
  };
  $hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode;
  haxe.ds.TreeNode.__name__ = ["haxe", "ds", "TreeNode"];
  haxe.ds.TreeNode.prototype = {
    left: null,
    right: null,
    key: null,
    value: null,
    _height: null,
    toString: function() {
      return (this.left == null ? "" : this.left.toString() + ", ") + ("" + Std.string(this.key) + "=" + Std.string(this.value)) + (this.right == null ? "" : ", " + this.right.toString());
    },
    __class__: haxe.ds.TreeNode
  };
  haxe.ds.EnumValueMap = function() {
    haxe.ds.BalancedTree.call(this);
  };
  $hxClasses["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap;
  haxe.ds.EnumValueMap.__name__ = ["haxe", "ds", "EnumValueMap"];
  haxe.ds.EnumValueMap.__interfaces__ = [IMap];
  haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
  haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype, {
    compare: function(k1, k2) {
      var d = k1[1] - k2[1];
      if (d != 0) return d;
      var p1 = k1.slice(2);
      var p2 = k2.slice(2);
      if (p1.length == 0 && p2.length == 0) return 0;
      return this.compareArgs(p1, p2);
    },
    compareArgs: function(a1, a2) {
      var ld = a1.length - a2.length;
      if (ld != 0) return ld;
      var _g1 = 0;
      var _g = a1.length;
      while (_g1 < _g) {
        var i = _g1++;
        var d = this.compareArg(a1[i], a2[i]);
        if (d != 0) return d;
      }
      return 0;
    },
    compareArg: function(v1, v2) {
      if (Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1, v2);
      else if ((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1, v2);
      else return Reflect.compare(v1, v2);
    },
    __class__: haxe.ds.EnumValueMap
  });
  haxe.ds._HashMap = {};
  haxe.ds._HashMap.HashMap_Impl_ = function() {};
  $hxClasses["haxe.ds._HashMap.HashMap_Impl_"] = haxe.ds._HashMap.HashMap_Impl_;
  haxe.ds._HashMap.HashMap_Impl_.__name__ = ["haxe", "ds", "_HashMap", "HashMap_Impl_"];
  haxe.ds._HashMap.HashMap_Impl_._new = function() {
    return { keys: new haxe.ds.IntMap(), values: new haxe.ds.IntMap() };
  };
  haxe.ds._HashMap.HashMap_Impl_.set = function(this1, k, v) {
    this1.keys.set(k.hashCode(), k);
    this1.values.set(k.hashCode(), v);
  };
  haxe.ds._HashMap.HashMap_Impl_.get = function(this1, k) {
    return this1.values.get(k.hashCode());
  };
  haxe.ds._HashMap.HashMap_Impl_.exists = function(this1, k) {
    return this1.values.exists(k.hashCode());
  };
  haxe.ds._HashMap.HashMap_Impl_.remove = function(this1, k) {
    this1.values.remove(k.hashCode());
    return this1.keys.remove(k.hashCode());
  };
  haxe.ds._HashMap.HashMap_Impl_.keys = function(this1) {
    return this1.keys.iterator();
  };
  haxe.ds._HashMap.HashMap_Impl_.iterator = function(this1) {
    return this1.values.iterator();
  };
  haxe.ds.IntMap = function() {
    this.h = {};
  };
  $hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
  haxe.ds.IntMap.__name__ = ["haxe", "ds", "IntMap"];
  haxe.ds.IntMap.__interfaces__ = [IMap];
  haxe.ds.IntMap.prototype = {
    h: null,
    set: function(key, value) {
      this.h[key] = value;
    },
    get: function(key) {
      return this.h[key];
    },
    exists: function(key) {
      return this.h.hasOwnProperty(key);
    },
    remove: function(key) {
      if (!this.h.hasOwnProperty(key)) return false;
      delete(this.h[key]);
      return true;
    },
    keys: function() {
      var a = [];
      for (var key in this.h) {
        if (this.h.hasOwnProperty(key)) a.push(key | 0);
      }
      return HxOverrides.iter(a);
    },
    iterator: function() {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function() {
          return this.it.hasNext();
        },
        next: function() {
          var i = this.it.next();
          return this.ref[i];
        }
      };
    },
    toString: function() {
      var s = new StringBuf();
      s.b += "{";
      var it = this.keys();
      while (it.hasNext()) {
        var i = it.next();
        if (i == null) s.b += "null";
        else s.b += "" + i;
        s.b += " => ";
        s.add(Std.string(this.get(i)));
        if (it.hasNext()) s.b += ", ";
      }
      s.b += "}";
      return s.b;
    },
    __class__: haxe.ds.IntMap
  };
  haxe.ds.ObjectMap = function() {
    this.h = {};
    this.h.__keys__ = {};
  };
  $hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
  haxe.ds.ObjectMap.__name__ = ["haxe", "ds", "ObjectMap"];
  haxe.ds.ObjectMap.__interfaces__ = [IMap];
  haxe.ds.ObjectMap.assignId = function(obj) {
    return obj.__id__ = ++haxe.ds.ObjectMap.count;
  };
  haxe.ds.ObjectMap.getId = function(obj) {
    return obj.__id__;
  };
  haxe.ds.ObjectMap.prototype = {
    h: null,
    set: function(key, value) {
      var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
      this.h[id] = value;
      this.h.__keys__[id] = key;
    },
    get: function(key) {
      return this.h[key.__id__];
    },
    exists: function(key) {
      return this.h.__keys__[key.__id__] != null;
    },
    remove: function(key) {
      var id = key.__id__;
      if (this.h.__keys__[id] == null) return false;
      delete(this.h[id]);
      delete(this.h.__keys__[id]);
      return true;
    },
    keys: function() {
      var a = [];
      for (var key in this.h.__keys__) {
        if (this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
      }
      return HxOverrides.iter(a);
    },
    iterator: function() {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function() {
          return this.it.hasNext();
        },
        next: function() {
          var i = this.it.next();
          return this.ref[i.__id__];
        }
      };
    },
    toString: function() {
      var s = new StringBuf();
      s.b += "{";
      var it = this.keys();
      while (it.hasNext()) {
        var i = it.next();
        s.add(Std.string(i));
        s.b += " => ";
        s.add(Std.string(this.h[i.__id__]));
        if (it.hasNext()) s.b += ", ";
      }
      s.b += "}";
      return s.b;
    },
    __class__: haxe.ds.ObjectMap
  };
  haxe.ds.StringMap = function() {
    this.h = {};
  };
  $hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
  haxe.ds.StringMap.__name__ = ["haxe", "ds", "StringMap"];
  haxe.ds.StringMap.__interfaces__ = [IMap];
  haxe.ds.StringMap.prototype = {
    h: null,
    set: function(key, value) {
      this.h["$" + key] = value;
    },
    get: function(key) {
      return this.h["$" + key];
    },
    exists: function(key) {
      return this.h.hasOwnProperty("$" + key);
    },
    remove: function(key) {
      key = "$" + key;
      if (!this.h.hasOwnProperty(key)) return false;
      delete(this.h[key]);
      return true;
    },
    keys: function() {
      var a = [];
      for (var key in this.h) {
        if (this.h.hasOwnProperty(key)) a.push(key.substr(1));
      }
      return HxOverrides.iter(a);
    },
    iterator: function() {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function() {
          return this.it.hasNext();
        },
        next: function() {
          var i = this.it.next();
          return this.ref["$" + i];
        }
      };
    },
    toString: function() {
      var s = new StringBuf();
      s.b += "{";
      var it = this.keys();
      while (it.hasNext()) {
        var i = it.next();
        if (i == null) s.b += "null";
        else s.b += "" + i;
        s.b += " => ";
        s.add(Std.string(this.get(i)));
        if (it.hasNext()) s.b += ", ";
      }
      s.b += "}";
      return s.b;
    },
    __class__: haxe.ds.StringMap
  };
  haxe.ds.WeakMap = function() {
    throw "Not implemented for this platform";
  };
  $hxClasses["haxe.ds.WeakMap"] = haxe.ds.WeakMap;
  haxe.ds.WeakMap.__name__ = ["haxe", "ds", "WeakMap"];
  haxe.ds.WeakMap.__interfaces__ = [IMap];
  haxe.ds.WeakMap.prototype = {
    set: function(key, value) {},
    get: function(key) {
      return null;
    },
    exists: function(key) {
      return false;
    },
    remove: function(key) {
      return false;
    },
    keys: function() {
      return null;
    },
    iterator: function() {
      return null;
    },
    toString: function() {
      return null;
    },
    __class__: haxe.ds.WeakMap
  };
  var js = {};
  js.Boot = function() {};
  $hxClasses["js.Boot"] = js.Boot;
  js.Boot.__name__ = ["js", "Boot"];
  js.Boot.__unhtml = function(s) {
    return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  };
  js.Boot.__trace = function(v, i) {
    var msg;
    if (i != null) msg = i.fileName + ":" + i.lineNumber + ": ";
    else msg = "";
    msg += js.Boot.__string_rec(v, "");
    if (i != null && i.customParams != null) {
      var _g = 0;
      var _g1 = i.customParams;
      while (_g < _g1.length) {
        var v1 = _g1[_g];
        ++_g;
        msg += "," + js.Boot.__string_rec(v1, "");
      }
    }
    var d;
    if (typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>";
    else if (typeof console != "undefined" && console.log != null) console.log(msg);
  };
  js.Boot.__clear_trace = function() {
    var d = document.getElementById("haxe:trace");
    if (d != null) d.innerHTML = "";
  };
  js.Boot.isClass = function(o) {
    return o.__name__;
  };
  js.Boot.isEnum = function(e) {
    return e.__ename__;
  };
  js.Boot.getClass = function(o) {
    if ((o instanceof Array) && o.__enum__ == null) return Array;
    else return o.__class__;
  };
  js.Boot.__string_rec = function(o, s) {
    if (o == null) return "null";
    if (s.length >= 5) return "<...>";
    var t = typeof(o);
    if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
    switch (t) {
      case "object":
        if (o instanceof Array) {
          if (o.__enum__) {
            if (o.length == 2) return o[0];
            var str = o[0] + "(";
            s += "\t";
            var _g1 = 2;
            var _g = o.length;
            while (_g1 < _g) {
              var i = _g1++;
              if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);
              else str += js.Boot.__string_rec(o[i], s);
            }
            return str + ")";
          }
          var l = o.length;
          var i1;
          var str1 = "[";
          s += "\t";
          var _g2 = 0;
          while (_g2 < l) {
            var i2 = _g2++;
            str1 += (i2 > 0 ? "," : "") + js.Boot.__string_rec(o[i2], s);
          }
          str1 += "]";
          return str1;
        }
        var tostr;
        try {
          tostr = o.toString;
        } catch (e) {
          return "???";
        }
        if (tostr != null && tostr != Object.toString) {
          var s2 = o.toString();
          if (s2 != "[object Object]") return s2;
        }
        var k = null;
        var str2 = "{\n";
        s += "\t";
        var hasp = o.hasOwnProperty != null;
        for (var k in o) {
          if (hasp && !o.hasOwnProperty(k)) {
            continue;
          }
          if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
            continue;
          }
          if (str2.length != 2) str2 += ", \n";
          str2 += s + k + " : " + js.Boot.__string_rec(o[k], s);
        }
        s = s.substring(1);
        str2 += "\n" + s + "}";
        return str2;
      case "function":
        return "<function>";
      case "string":
        return o;
      default:
        return String(o);
    }
  };
  js.Boot.__interfLoop = function(cc, cl) {
    if (cc == null) return false;
    if (cc == cl) return true;
    var intf = cc.__interfaces__;
    if (intf != null) {
      var _g1 = 0;
      var _g = intf.length;
      while (_g1 < _g) {
        var i = _g1++;
        var i1 = intf[i];
        if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
      }
    }
    return js.Boot.__interfLoop(cc.__super__, cl);
  };
  js.Boot.__instanceof = function(o, cl) {
    if (cl == null) return false;
    switch (cl) {
      case Int:
        return (o | 0) === o;
      case Float:
        return typeof(o) == "number";
      case Bool:
        return typeof(o) == "boolean";
      case String:
        return typeof(o) == "string";
      case Array:
        return (o instanceof Array) && o.__enum__ == null;
      case Dynamic:
        return true;
      default:
        if (o != null) {
          if (typeof(cl) == "function") {
            if (o instanceof cl) return true;
            if (js.Boot.__interfLoop(js.Boot.getClass(o), cl)) return true;
          }
        } else return false;
        if (cl == Class && o.__name__ != null) return true;
        if (cl == Enum && o.__ename__ != null) return true;
        return o.__enum__ == cl;
    }
  };
  js.Boot.__cast = function(o, t) {
    if (js.Boot.__instanceof(o, t)) return o;
    else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
  };

  function $iterator(o) {
    if (o instanceof Array) return function() {
      return HxOverrides.iter(o); };
    return typeof(o.iterator) == 'function' ? $bind(o, o.iterator) : o.iterator; }
  var $_, $fid = 0;

  function $bind(o, m) {
    if (m == null) return null;
    if (m.__id__ == null) m.__id__ = $fid++;
    var f;
    if (o.hx__closures__ == null) o.hx__closures__ = {};
    else f = o.hx__closures__[m.__id__];
    if (f == null) { f = function() {
        return f.method.apply(f.scope, arguments); };
      f.scope = o;
      f.method = m;
      o.hx__closures__[m.__id__] = f; }
    return f; }
  if (Array.prototype.indexOf) HxOverrides.indexOf = function(a, o, i) {
    return Array.prototype.indexOf.call(a, o, i);
  };
  if (Array.prototype.lastIndexOf) HxOverrides.lastIndexOf = function(a1, o1, i1) {
    return Array.prototype.lastIndexOf.call(a1, o1, i1);
  };
  Math.NaN = Number.NaN;
  Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  $hxClasses.Math = Math;
  Math.isFinite = function(i) {
    return isFinite(i);
  };
  Math.isNaN = function(i1) {
    return isNaN(i1);
  };
  String.prototype.__class__ = $hxClasses.String = String;
  String.__name__ = ["String"];
  $hxClasses.Array = Array;
  Array.__name__ = ["Array"];
  Date.prototype.__class__ = $hxClasses.Date = Date;
  Date.__name__ = ["Date"];
  var Int = $hxClasses.Int = { __name__: ["Int"] };
  var Dynamic = $hxClasses.Dynamic = { __name__: ["Dynamic"] };
  var Float = $hxClasses.Float = Number;
  Float.__name__ = ["Float"];
  var Bool = $hxClasses.Bool = Boolean;
  Bool.__ename__ = ["Bool"];
  var Class = $hxClasses.Class = { __name__: ["Class"] };
  var Enum = {};
  var Void = $hxClasses.Void = { __ename__: ["Void"] };
  if (Array.prototype.map == null) Array.prototype.map = function(f) {
    var a = [];
    var _g1 = 0;
    var _g = this.length;
    while (_g1 < _g) {
      var i = _g1++;
      a[i] = f(this[i]);
    }
    return a;
  };
  if (Array.prototype.filter == null) Array.prototype.filter = function(f1) {
    var a1 = [];
    var _g11 = 0;
    var _g2 = this.length;
    while (_g11 < _g2) {
      var i1 = _g11++;
      var e = this[i1];
      if (f1(e)) a1.push(e);
    }
    return a1;
  };
  de.polygonal.Printf._initialized = false;
  de.polygonal.ds.Bits.BIT_01 = 1;
  de.polygonal.ds.Bits.BIT_02 = 2;
  de.polygonal.ds.Bits.BIT_03 = 4;
  de.polygonal.ds.Bits.BIT_04 = 8;
  de.polygonal.ds.Bits.BIT_05 = 16;
  de.polygonal.ds.Bits.BIT_06 = 32;
  de.polygonal.ds.Bits.BIT_07 = 64;
  de.polygonal.ds.Bits.BIT_08 = 128;
  de.polygonal.ds.Bits.BIT_09 = 256;
  de.polygonal.ds.Bits.BIT_10 = 512;
  de.polygonal.ds.Bits.BIT_11 = 1024;
  de.polygonal.ds.Bits.BIT_12 = 2048;
  de.polygonal.ds.Bits.BIT_13 = 4096;
  de.polygonal.ds.Bits.BIT_14 = 8192;
  de.polygonal.ds.Bits.BIT_15 = 16384;
  de.polygonal.ds.Bits.BIT_16 = 32768;
  de.polygonal.ds.Bits.BIT_17 = 65536;
  de.polygonal.ds.Bits.BIT_18 = 131072;
  de.polygonal.ds.Bits.BIT_19 = 262144;
  de.polygonal.ds.Bits.BIT_20 = 524288;
  de.polygonal.ds.Bits.BIT_21 = 1048576;
  de.polygonal.ds.Bits.BIT_22 = 2097152;
  de.polygonal.ds.Bits.BIT_23 = 4194304;
  de.polygonal.ds.Bits.BIT_24 = 8388608;
  de.polygonal.ds.Bits.BIT_25 = 16777216;
  de.polygonal.ds.Bits.BIT_26 = 33554432;
  de.polygonal.ds.Bits.BIT_27 = 67108864;
  de.polygonal.ds.Bits.BIT_28 = 134217728;
  de.polygonal.ds.Bits.BIT_29 = 268435456;
  de.polygonal.ds.Bits.BIT_30 = 536870912;
  de.polygonal.ds.Bits.BIT_31 = 1073741824;
  de.polygonal.ds.Bits.BIT_32 = -2147483648;
  de.polygonal.ds.Bits.ALL = -1;
  de.polygonal.ds.HashKey._counter = 0;
  haxe.ds.ObjectMap.count = 0;
})(typeof window != "undefined" ? window : exports);
