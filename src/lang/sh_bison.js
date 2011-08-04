if(!this.sh_languages){this.sh_languages={}}var lang="bison";sh_languages[lang]=[[[/^%\{/g,"sh-preproc",1,1],[/^%[sx]/g,"sh-preproc",16,1],[/^%option/g,"sh-preproc",17,1],[/^%(?:array|pointer|[aceknopr])/g,"sh-preproc",-1],[/[A-Za-z_][A-Za-z0-9_-]*/g,"sh-preproc",19,1],[/^%%/g,"sh-preproc",20,1]],[[/^%\}/g,"sh-preproc",-2],[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh-keyword",-1],[/\/\/\//g,"sh-comment",2],[/\/\//g,"sh-comment",8],[/\/\*\*/g,"sh-comment",9],[/\/\*/g,"sh-comment",10],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh-preproc",11,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh-preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh-number",-1],[/"/g,"sh-string",14],[/'/g,"sh-string",15],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh-keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh-type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1],[/\{|\}/g,"sh-cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh-function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh-usertype","sh-usertype","sh-normal"],-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh-url",-1],[/<\?xml/g,"sh-preproc",3,1],[/<!DOCTYPE/g,"sh-preproc",5,1],[/<!--/g,"sh-comment",6],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh-keyword",7,1],[/&(?:[A-Za-z0-9]+);/g,"sh-preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh-keyword",7,1],[/@[A-Za-z]+/g,"sh-type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh-todo",-1]],[[/\?>/g,"sh-preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh-type","sh-normal","sh-symbol"],-1],[/"/g,"sh-string",4]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh-string",-2]],[[/>/g,"sh-preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh-type","sh-normal","sh-symbol"],-1],[/"/g,"sh-string",4]],[[/-->/g,"sh-comment",-2],[/<!--/g,"sh-comment",6]],[[/(?:\/)?>/g,"sh-keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh-type","sh-normal","sh-symbol"],-1],[/"/g,"sh-string",4]],[[/$/g,null,-2]],[[/\*\//g,"sh-comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh-url",-1],[/<\?xml/g,"sh-preproc",3,1],[/<!DOCTYPE/g,"sh-preproc",5,1],[/<!--/g,"sh-comment",6],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh-keyword",7,1],[/&(?:[A-Za-z0-9]+);/g,"sh-preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh-keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh-keyword",7,1],[/@[A-Za-z]+/g,"sh-type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh-todo",-1]],[[/\*\//g,"sh-comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh-url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh-todo",-1]],[[/$/g,null,-2],[/</g,"sh-string",12],[/"/g,"sh-string",13],[/\/\/\//g,"sh-comment",2],[/\/\//g,"sh-comment",8],[/\/\*\*/g,"sh-comment",9],[/\/\*/g,"sh-comment",10]],[[/$/g,null,-2],[/>/g,"sh-string",-2]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh-string",-2]],[[/"/g,"sh-string",-2],[/\\./g,"sh-specialchar",-1]],[[/'/g,"sh-string",-2],[/\\./g,"sh-specialchar",-1]],[[/$/g,null,-2],[/[A-Za-z_][A-Za-z0-9_-]*/g,"sh-function",-1]],[[/$/g,null,-2],[/[A-Za-z_][A-Za-z0-9_-]*/g,"sh-keyword",-1],[/"/g,"sh-string",18],[/=/g,"sh-symbol",-1]],[[/$/g,null,-2],[/"/g,"sh-string",-2]],[[/$/g,null,-2],[/\{[A-Za-z_][A-Za-z0-9_-]*\}/g,"sh-type",-1],[/"/g,"sh-string",13],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1]],[[/^%%/g,"sh-preproc",21,1],[/<[A-Za-z_][A-Za-z0-9_-]*>/g,"sh-function",-1],[/"/g,"sh-string",13],[/\\./g,"sh-preproc",-1],[/\{[A-Za-z_][A-Za-z0-9_-]*\}/g,"sh-type",-1],[/\/\*/g,"sh-comment",22],[/\{/g,"sh-cbracket",23,1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1]],[[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh-keyword",-1],[/\/\/\//g,"sh-comment",2],[/\/\//g,"sh-comment",8],[/\/\*\*/g,"sh-comment",9],[/\/\*/g,"sh-comment",10],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh-preproc",11,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh-preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh-number",-1],[/"/g,"sh-string",14],[/'/g,"sh-string",15],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh-keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh-type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1],[/\{|\}/g,"sh-cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh-function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh-usertype","sh-usertype","sh-normal"],-1]],[[/\*\//g,"sh-comment",-2],[/\/\*/g,"sh-comment",22]],[[/\}/g,"sh-cbracket",-2],[/\{/g,"sh-cbracket",23,1],[/\$./g,"sh-variable",-1],[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh-keyword",-1],[/\/\/\//g,"sh-comment",2],[/\/\//g,"sh-comment",8],[/\/\*\*/g,"sh-comment",9],[/\/\*/g,"sh-comment",10],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh-keyword","sh-normal","sh-classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh-preproc",11,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh-preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh-number",-1],[/"/g,"sh-string",14],[/'/g,"sh-string",15],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh-keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh-type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1],[/\{|\}/g,"sh-cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh-function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh-usertype","sh-usertype","sh-normal"],-1]]];if(sh_afterLoad){sh_afterLoad(lang)};