if(!this.sh_languages){this.sh_languages={}}var lang="scala";sh_languages[lang]=[[[/\b(?:import|package)\b/g,"sh-preproc",-1],[/\/\/\//g,"sh-comment",1],[/\/\//g,"sh-comment",7],[/\/\*\*/g,"sh-comment",8],[/\/\*/g,"sh-comment",9],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh-number",-1],[/"/g,"sh-string",10],[/'/g,"sh-string",11],[/(\b(?:class|trait))([ \t]+)([$A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/abstract|case|catch|class|def|do|else|extends|false|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|requires|return|sealed|super|this|throw|trait|try|true|type|val|var|while|with|yield|_|:|=>|=|<-|<:|<%|>:|#|@/g,"sh-keyword",-1],[/\b(?:Int|Byte|Boolean|Char|Long|Float|Double|Short|Nil)\b/g,"sh-type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1],[/\{|\}/g,"sh-cbracket",-1],[/(?:[A-Za-z]|_|[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-])(?:[A-Za-z0-9_]|[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-])*(?=[ \t]*\()/g,"sh-function",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh-url",-1],[/<\?xml/g,"sh-preproc",2,1],[/<!DOCTYPE/g,"sh-preproc",4,1],[/<!--/g,"sh-comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh-keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh-preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh-keyword",6,1],[/@[A-Za-z]+/g,"sh-type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh-todo",-1]],[[/\?>/g,"sh-preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh-type","sh-normal","sh-symbol"],-1],[/"/g,"sh-string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh-string",-2]],[[/>/g,"sh-preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh-type","sh-normal","sh-symbol"],-1],[/"/g,"sh-string",3]],[[/-->/g,"sh-comment",-2],[/<!--/g,"sh-comment",5]],[[/(?:\/)?>/g,"sh-keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh-type","sh-normal","sh-symbol"],-1],[/"/g,"sh-string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh-comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh-url",-1],[/<\?xml/g,"sh-preproc",2,1],[/<!DOCTYPE/g,"sh-preproc",4,1],[/<!--/g,"sh-comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh-keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh-preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh-keyword",6,1],[/@[A-Za-z]+/g,"sh-type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh-todo",-1]],[[/\*\//g,"sh-comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh-url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh-todo",-1]],[[/"/g,"sh-string",-2],[/\\./g,"sh-specialchar",-1]],[[/'/g,"sh-string",-2],[/\\./g,"sh-specialchar",-1]]];if(sh_afterLoad){sh_afterLoad(lang)};