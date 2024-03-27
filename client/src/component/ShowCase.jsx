import { useEffect } from 'react';

const ShowCase = () => {
  useEffect(() => {
    const uid = '1207d0f361d74ea28990d344dfcd3f53';
    const iframe = document.getElementById('api-frame');

    // By default, the latest version of the viewer API will be used.
    const client = new Sketchfab(iframe);

    client.init(uid, {
      success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function () {
          console.log('Viewer is ready');
        });
      },
      error: function onError() {
        console.log('Viewer error');
      }
    });
  }, []);

  return (
    <div>
      <iframe className='model'
        src=""
        id="api-frame"
        allow="autoplay"
        fullscreen
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default ShowCase;
