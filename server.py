import http.server
import os
import sys

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def translate_path(self, path):
        real_path = super().translate_path(path)
        # If file/dir directly exists, return it
        if os.path.exists(real_path):
            return real_path
        # If file + '.html' exists, serve it seamlessly
        html_path = real_path + '.html'
        if os.path.exists(html_path):
            return html_path
        return real_path

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    http.server.test(
        HandlerClass=CleanURLHandler,
        port=port
    )
