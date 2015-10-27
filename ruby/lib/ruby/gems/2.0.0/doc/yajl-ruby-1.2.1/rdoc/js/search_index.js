var search_data = {"index":{"searchIndex":["json","generatorerror","jsonerror","parsererror","kernel","object","yajl","bzip2","streamreader","streamwriter","deflate","streamreader","streamwriter","encoder","gzip","streamreader","streamwriter","httpstream","httperror","invalidcontenttype","parser","json()","default_options()","delete()","delete()","dump()","dump()","encode()","encode()","encode()","encode()","generate()","get()","get()","initialize_socket()","load()","load()","new()","new()","parse()","parse()","parse()","parse()","parse()","post()","post()","pretty_generate()","put()","put()","read()","read()","read()","request()","terminate()","to_json()","write()"],"longSearchIndex":["json","json::generatorerror","json::jsonerror","json::parsererror","kernel","object","yajl","yajl::bzip2","yajl::bzip2::streamreader","yajl::bzip2::streamwriter","yajl::deflate","yajl::deflate::streamreader","yajl::deflate::streamwriter","yajl::encoder","yajl::gzip","yajl::gzip::streamreader","yajl::gzip::streamwriter","yajl::httpstream","yajl::httpstream::httperror","yajl::httpstream::invalidcontenttype","yajl::parser","kernel#json()","json::default_options()","yajl::httpstream::delete()","yajl::httpstream#delete()","json::dump()","yajl::dump()","yajl::bzip2::streamwriter::encode()","yajl::deflate::streamwriter::encode()","yajl::encoder::encode()","yajl::gzip::streamwriter::encode()","json::generate()","yajl::httpstream#get()","yajl::httpstream::get()","yajl::httpstream#initialize_socket()","json::load()","yajl::load()","yajl::deflate::streamreader::new()","yajl::httpstream::httperror::new()","json::parse()","yajl::bzip2::streamreader::parse()","yajl::deflate::streamreader::parse()","yajl::gzip::streamreader::parse()","yajl::parser::parse()","yajl::httpstream#post()","yajl::httpstream::post()","json::pretty_generate()","yajl::httpstream::put()","yajl::httpstream#put()","yajl::bzip2::streamreader#read()","yajl::deflate::streamreader#read()","yajl::gzip::streamreader#read()","yajl::httpstream::request()","yajl::httpstream#terminate()","object#to_json()","yajl::deflate::streamwriter#write()"],"info":[["JSON","","JSON.html","",""],["JSON::GeneratorError","","JSON/GeneratorError.html","",""],["JSON::JSONError","","JSON/JSONError.html","",""],["JSON::ParserError","","JSON/ParserError.html","",""],["Kernel","","Kernel.html","",""],["Object","","Object.html","",""],["Yajl","","Yajl.html","","<p>Yajl\n<p>Ruby bindings to the excellent Yajl (Yet Another JSON Parser) ANSI C\nlibrary.\n"],["Yajl::Bzip2","","Yajl/Bzip2.html","",""],["Yajl::Bzip2::StreamReader","","Yajl/Bzip2/StreamReader.html","","<p>This is a wrapper around Bzip::Reader to allow it&#39;s #read method to\nadhere to the IO spec, allowing …\n"],["Yajl::Bzip2::StreamWriter","","Yajl/Bzip2/StreamWriter.html","","<p>A wrapper around the Bzip2::Writer class for easier JSON stream encoding\n"],["Yajl::Deflate","","Yajl/Deflate.html","",""],["Yajl::Deflate::StreamReader","","Yajl/Deflate/StreamReader.html","","<p>This is a wrapper around Zlib::Inflate, creating a #read method that\nadheres to the IO spec, allowing …\n"],["Yajl::Deflate::StreamWriter","","Yajl/Deflate/StreamWriter.html","","<p>A wrapper around the Zlib::Deflate class for easier JSON stream parsing\n"],["Yajl::Encoder","","Yajl/Encoder.html","",""],["Yajl::Gzip","","Yajl/Gzip.html","",""],["Yajl::Gzip::StreamReader","","Yajl/Gzip/StreamReader.html","","<p>This is a wrapper around Zlib::GzipReader to allow it&#39;s #read method to\nadhere to the IO spec, allowing …\n"],["Yajl::Gzip::StreamWriter","","Yajl/Gzip/StreamWriter.html","","<p>Wraper around the Zlib::GzipWriter class\n"],["Yajl::HttpStream","","Yajl/HttpStream.html","","<p>This module is for making HTTP requests to which the response bodies (and\npossibly requests in the near …\n"],["Yajl::HttpStream::HttpError","","Yajl/HttpStream/HttpError.html","",""],["Yajl::HttpStream::InvalidContentType","","Yajl/HttpStream/InvalidContentType.html","","<p>This Exception is thrown when an HTTP response isn&#39;t in\nALLOWED_MIME_TYPES and therefore cannot be …\n"],["Yajl::Parser","","Yajl/Parser.html","",""],["JSON","Kernel","Kernel.html#method-i-JSON","(object, opts = {})",""],["default_options","JSON","JSON.html#method-c-default_options","()",""],["delete","Yajl::HttpStream","Yajl/HttpStream.html#method-c-delete","(uri, opts = {}, &block)","<p>Makes a basic HTTP DELETE request to the URI provided\n"],["delete","Yajl::HttpStream","Yajl/HttpStream.html#method-i-delete","(uri, opts = {}, &block)","<p>Makes a basic HTTP DELETE request to the URI provided allowing the user to\nterminate the connection\n"],["dump","JSON","JSON.html#method-c-dump","(obj, io=nil, *args)",""],["dump","Yajl","Yajl.html#method-c-dump","(obj, *args, &block)","<p>For compatibility, has the same signature of Yajl::Encoder.encode\n"],["encode","Yajl::Bzip2::StreamWriter","Yajl/Bzip2/StreamWriter.html#method-c-encode","(obj, io)","<p>A helper method for encoding to a bzip2-compressed stream\n<p>Look up Yajl::Encoder#encode for parameter documentation …\n"],["encode","Yajl::Deflate::StreamWriter","Yajl/Deflate/StreamWriter.html#method-c-encode","(obj, io)","<p>A helper method for one-off encoding to a deflate-compressed stream\n<p>Look up Yajl::Encoder#encode for parameter …\n"],["encode","Yajl::Encoder","Yajl/Encoder.html#method-c-encode","(obj, *args, &block)","<p>A helper method for encode-and-forget use-cases\n<p>Examples:\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Yajl</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Encoder</span>.<span class=\"ruby-identifier\">encode</span>(<span class=\"ruby-identifier\">obj</span>[, <span class=\"ruby-identifier\">io</span>, :<span class=\"ruby-identifier\">pretty</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-keyword\">true</span>, <span class=\"ruby-operator\">...</span>\n</pre>\n"],["encode","Yajl::Gzip::StreamWriter","Yajl/Gzip/StreamWriter.html#method-c-encode","(obj, io)","<p>A helper method for one-off encoding to a gzip-compressed stream\n<p>Look up Yajl::Encoder#encode for parameter …\n"],["generate","JSON","JSON.html#method-c-generate","(obj, opts=nil)",""],["get","Yajl::HttpStream","Yajl/HttpStream.html#method-i-get","(uri, opts = {}, &block)","<p>Makes a basic HTTP GET request to the URI provided allowing the user to\nterminate the connection\n"],["get","Yajl::HttpStream","Yajl/HttpStream.html#method-c-get","(uri, opts = {}, &block)","<p>Makes a basic HTTP GET request to the URI provided\n"],["initialize_socket","Yajl::HttpStream","Yajl/HttpStream.html#method-i-initialize_socket","(uri, opts = {})","<p>Initialize socket and add it to the opts\n"],["load","JSON","JSON.html#method-c-load","(input, *args)",""],["load","Yajl","Yajl.html#method-c-load","(str_or_io, options={}, read_bufsize=nil, &block)","<p>For compatibility, has the same signature of Yajl::Parser.parse\n"],["new","Yajl::Deflate::StreamReader","Yajl/Deflate/StreamReader.html#method-c-new","(io, options)","<p>Wrapper to the initialize method so we can set the initial IO to parse\nfrom.\n"],["new","Yajl::HttpStream::HttpError","Yajl/HttpStream/HttpError.html#method-c-new","(message, headers)",""],["parse","JSON","JSON.html#method-c-parse","(str, opts=JSON.default_options)",""],["parse","Yajl::Bzip2::StreamReader","Yajl/Bzip2/StreamReader.html#method-c-parse","(input, options={}, buffer_size=nil, &block)","<p>Helper method for one-off parsing from a bzip2-compressed stream\n<p>See Yajl::Parser#parse for parameter …\n"],["parse","Yajl::Deflate::StreamReader","Yajl/Deflate/StreamReader.html#method-c-parse","(input, options={}, buffer_size=nil, &block)","<p>Helper method for one-off parsing from a deflate-compressed stream\n<p>See Yajl::Parser#parse for parameter …\n"],["parse","Yajl::Gzip::StreamReader","Yajl/Gzip/StreamReader.html#method-c-parse","(input, options={}, buffer_size=nil, &block)","<p>Helper method for one-off parsing from a gzip-compressed stream\n<p>See Yajl::Parser#parse for parameter documentation …\n"],["parse","Yajl::Parser","Yajl/Parser.html#method-c-parse","(str_or_io, options={}, read_bufsize=nil, &block)","<p>A helper method for parse-and-forget use-cases\n<p><code>io</code> is the stream to parse JSON from\n<p>The <code>options</code> hash allows …\n"],["post","Yajl::HttpStream","Yajl/HttpStream.html#method-i-post","(uri, body, opts = {}, &block)","<p>Makes a basic HTTP POST request to the URI provided allowing the user to\nterminate the connection\n"],["post","Yajl::HttpStream","Yajl/HttpStream.html#method-c-post","(uri, body, opts = {}, &block)","<p>Makes a basic HTTP POST request to the URI provided\n"],["pretty_generate","JSON","JSON.html#method-c-pretty_generate","(obj, opts={})",""],["put","Yajl::HttpStream","Yajl/HttpStream.html#method-c-put","(uri, body, opts = {}, &block)","<p>Makes a basic HTTP PUT request to the URI provided\n"],["put","Yajl::HttpStream","Yajl/HttpStream.html#method-i-put","(uri, body, opts = {}, &block)","<p>Makes a basic HTTP PUT request to the URI provided allowing the user to\nterminate the connection\n"],["read","Yajl::Bzip2::StreamReader","Yajl/Bzip2/StreamReader.html#method-i-read","(len=nil, buffer=nil)","<p>A helper method to allow use similar to IO#read\n"],["read","Yajl::Deflate::StreamReader","Yajl/Deflate/StreamReader.html#method-i-read","(len=nil, buffer=nil)","<p>A helper method to allow use similar to IO#read\n"],["read","Yajl::Gzip::StreamReader","Yajl/Gzip/StreamReader.html#method-i-read","(len=nil, buffer=nil)","<p>A helper method to allow use similar to IO#read\n"],["request","Yajl::HttpStream","Yajl/HttpStream.html#method-c-request","(method, uri, opts = {}, &block)",""],["terminate","Yajl::HttpStream","Yajl/HttpStream.html#method-i-terminate","()","<p>Terminate a running HTTPStream instance\n"],["to_json","Object","Object.html#method-i-to_json","(*args, &block)",""],["write","Yajl::Deflate::StreamWriter","Yajl/Deflate/StreamWriter.html#method-i-write","(str)","<p>A helper method to allow use similar to IO#write\n"]]}}