import http.server
import os
import sys

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def translate_path(self, path):
        real_path = super().translate_path(path)
        
        # If it's a directory, check if index.html exists
        if os.path.isdir(real_path):
            index_path = os.path.join(real_path, 'index.html')
            if os.path.exists(index_path):
                return index_path
            # If no index.html in directory, check if a matching <dirname>.html sibling exists (e.g. news/ -> news.html)
            clean_dir = real_path.rstrip('/\\')
            html_sibling = clean_dir + '.html'
            if os.path.exists(html_sibling):
                return html_sibling
            return real_path

        # If file directly exists, serve it
        if os.path.exists(real_path):
            return real_path

        # If clean URL: real_path + '.html' exists, serve it
        html_path = real_path.rstrip('/\\') + '.html'
        if os.path.exists(html_path):
            return html_path

        return real_path

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    http.server.test(
        HandlerClass=CleanURLHandler,
        port=port
    )
