if(!this.sh_languages){this.sh_languages={}}var lang="sml";sh_languages[lang]=[[[/\b(?:external|open|include|[A-Z][\w']*(?=\.))\b/g,"sh-preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh-number",-1],[/"/g,"sh-string",1],[/\(\*/g,"sh-comment",2],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh-symbol",-1],[/\{|\}/g,"sh-cbracket",-1],[/\b(?:abstraction|abstype|and|andalso|as|before|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|o|of|op|open|orelse|overload|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/g,"sh-keyword",-1],[/\b(?:int|byte|boolean|char|long|float|double|short|void)\b/g,"sh-type",-1]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh-string",-2]],[[/\*\)/g,"sh-comment",-2],[/\(\*/g,"sh-comment",2]]];if(sh_afterLoad){sh_afterLoad(lang)};