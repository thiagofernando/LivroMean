# LivroMean

Starting selenium standalone server...
[launcher] Running 1 instances of WebDriver
Selenium standalone server started at http://192.168.25.4:41311/wd/hub
F

Failures:

  1) Página Principal Deve estar logado
   Message:
     Error: Angular could not be found on the page http://localhost:3000/#/contatos : angular never provided resumeBootstrap
   Stacktrace:
     Error: Angular could not be found on the page http://localhost:3000/#/contatos : angular never provided resumeBootstrap
    at C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\lib\protractor.js:479:17
    at [object Object].promise.ControlFlow.runInFrame_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\w
ebdriver\promise.js:1877:20)
    at [object Object].promise.Callback_.goog.defineClass.notify (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdr
iver\lib\webdriver\promise.js:2464:25)
    at [object Object].promise.Promise.notify_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdriver
\promise.js:563:12)
    at Array.forEach (native)
    at Object.goog.array.forEach (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\goog\array\array.js:203
:43)
    at [object Object].promise.Promise.notifyAll_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdri
ver\promise.js:552:16)
    at goog.async.run.processWorkQueue (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\goog\async\run.js
:125:21)
    at runMicrotasksCallback (node.js:337:7)
    at process._tickCallback (node.js:355:11)
From: Task: Asynchronous test function: beforeEach()
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\jasminewd\index.js:93:33)
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\async-callback.js:45:37)

    at [object Object].jasmine.Block.execute (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.
js:1174:17)
    at [object Object].jasmine.Queue.next_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.js
:2209:31)
    at [object Object]._onTimeout (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.js:2199:18)

Error
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\WebstormProjects\MEAN2\test\e2e\contatosPageSpec.js:7:5)
    at [object Object].jasmine.Env.describe_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.
js:913:21)
    at [object Object].jasmine.Env.describe (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.j
s:898:15)
    at describe (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.js:658:27)
    at Object.<anonymous> (C:\Users\ThiagoFernando\WebstormProjects\MEAN2\test\e2e\contatosPageSpec.js:4:1)

  2) Página Principal Deve estar logado
   Message:
     NoSuchElementError: No element found using locator: By.id("usuario-logado")
   Stacktrace:
     NoSuchElementError: No element found using locator: By.id("usuario-logado")
    at new bot.Error (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\atoms\error.js:113:18)
    at C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\lib\element.js:706:15
    at [object Object].promise.ControlFlow.runInFrame_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\w
ebdriver\promise.js:1877:20)
    at [object Object].promise.Callback_.goog.defineClass.notify (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdr
iver\lib\webdriver\promise.js:2464:25)
    at [object Object].promise.Promise.notify_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdriver
\promise.js:563:12)
    at Array.forEach (native)
    at Object.goog.array.forEach (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\goog\array\array.js:203
:43)
    at [object Object].promise.Promise.notifyAll_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdri
ver\promise.js:552:16)
    at goog.async.run.processWorkQueue (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\goog\async\run.js
:125:21)
    at runMicrotasksCallback (node.js:337:7)
Error
    at [object Object].ElementArrayFinder.applyAction_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\lib\element.js:403:21)
    at [object Object].self.(anonymous function) [as getText] (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\lib\element.js:76:19)
    at [object Object].self.(anonymous function) [as getText] (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\lib\element.js:733:11)
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\WebstormProjects\MEAN2\test\e2e\contatosPageSpec.js:12:42)
    at C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\jasminewd\index.js:94:14
    at [object Object].promise.ControlFlow.runInFrame_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\w
ebdriver\promise.js:1877:20)
    at [object Object].promise.ControlFlow.runEventLoop_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib
\webdriver\promise.js:1755:8)
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\webdriver\promise.js:
2056:12)
    at goog.async.run.processWorkQueue (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\lib\goog\async\run.js
:125:21)
From: Task: Asynchronous test function: it()
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\jasminewd\index.js:93:33)
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\async-callback.js:45:37)

    at [object Object].jasmine.Block.execute (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.
js:1174:17)
    at [object Object].jasmine.Queue.next_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.js
:2209:31)
    at [object Object]._onTimeout (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.js:2199:18)

Error
    at [object Object].<anonymous> (C:\Users\ThiagoFernando\WebstormProjects\MEAN2\test\e2e\contatosPageSpec.js:11:5)
    at [object Object].jasmine.Env.describe_ (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.
js:913:21)
    at [object Object].jasmine.Env.describe (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.j
s:898:15)
    at describe (C:\Users\ThiagoFernando\AppData\Roaming\npm\node_modules\protractor\node_modules\minijasminenode\lib\jasmine-1.3.1.js:658:27)
    at Object.<anonymous> (C:\Users\ThiagoFernando\WebstormProjects\MEAN2\test\e2e\contatosPageSpec.js:4:1)

Finished in 10.804 seconds
1 test, 2 assertions, 2 failures

Shutting down selenium standalone server.
[launcher] 0 instance(s) of WebDriver still running
[launcher] chrome #1 failed 2 test(s)
[launcher] overall: 2 failed spec(s)
[launcher] Process exited with error code 1
