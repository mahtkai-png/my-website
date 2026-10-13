  // 元の console.log を退避
    const originalLog = console.log;
    const consoleDiv = document.getElementById('console');

    // console.log をオーバーライド
    console.log = function(...args) {
      // 本来のコンソールにも出力（デベロッパーツール等で見たい場合）
      originalLog.apply(console, args);

      // 引数をスペース区切りなどの文字列に変換してHTMLに追加
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : arg
      ).join(' ');

      consoleDiv.innerHTML += message + '<br>';
    };