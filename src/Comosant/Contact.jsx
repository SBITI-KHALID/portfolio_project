import { useRef } from 'react';

export default function Contact(props) {
  const { them } = props;
  
  // Refs for each contact's information
  const phoneRef = useRef(null);
  const whatsappRef = useRef(null);
  const emailRef = useRef(null);

  const handleCopy = (textRef) => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.textContent).then(() => {
        alert("Copied successfuly !");
      }).catch(err => {
        alert("Failed to copy text: " + err);
      });
    }
  };

  return (
    <div className="w-100 container">
      <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">
      {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu11b0uREEYgOFnuQUkEpHo0LgGhQuQqNyARiEUCipsg0Si0ChUCtdA4RI0egoi4QokfnbkrMjZ2d0Z55xTf/O+33w/Z1oa/loN88UEK9jDXAX5LRbD+ZjgHvMV4N2jP+yY4KsG+C87V7CPsyKBdewMSCb7Bps4KQGD4KCPpEcwrDTjeCvBJvFclyDAXkqwMbymCrpx/W6yjcMSbBWXdQkCp41TjGIJR52mT6QKhvUgd3qzmxwEj3goTDOYrmtMr3CBa3wW0JGiTGtYjoiS9uC9M5phoc6H1GcLx6WYpBLtFo1NqX9Ywo0/gUmCKTyl0LGAu0GC2B7kvBehJx+5gsTko2FJTW5E0PiDE57M8N+frZD+TbEj0RetArf3aM6U/Ev8DavcMBm78qY2AAAAAElFTkSuQmCC"/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSEu1lr8uBFEUh78fr4BkE5Ho0HgGxT6AROUFNFsIhYIK2yDZRKFRqBSegcIjaPQURMITSDicNRObmdmZO3tnbn3O7zv3/LnnipaPWtYnBzCzDeAQWI6A30tac/8iwCOwEiE+dJU01C4CWKx4DOAIuEgC6AH744KZ5AY7kgajgmbmgOMiSA5gZlWpmZX0kQF0gNemAB1JbxnADPAeBEiNSm6yJ+kkA9gErpsCuE4fOAemgS5w+lv0uSBAQA1qde8kRXbAM/CUkBaBhaba9Aa4Am4lfbuomU0ladoC1rOg0Dn4BHqSLsvyY2a7wNmoTWiKDiR5YSuPmfkQbqeGoYB5SS+V6n8pWwUexgKK5iCNIhDgNfmqBQgRbqqLarPKuqj1heMr09/9pdph/zvcSfKnJL/RIkQLXVv/VfwAZYiHGY1LSfkAAAAASUVORK5CYII="/>
                    }
        <span className="mx-2">Contact</span>
      </h4>
      <div className="row">
        {/* Phone */}
        <div className="p-1 col-12 col-md-6">
          <div className={`cards p-3 txt ${them === 'clear' ? ' text-dark' : "text-light"}`}>
            <div className="card-body">
              <h5 className="card-title">
              <img  className='mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAzZJREFUWEftl09IVFEUxr/znoktghyCnGdK6MxEWC1C2gSBGUFUhIGQRi3CjeS8sY1hgUwU0iqbGQMpKoz+QSRBUIsWrSL64yaQxDcGpfNUCq0gzH/3xBTKMPPmvfuaEVx4t/c73/d753Dv3CGssEUrjAerQE4Tce5Q+GWB9rPMa17xjTiZ5WPfFkhrNXZCoA9AOTF3JGKBS/kItfPICqTpxhEADwEULRoQuDkRDfQsJ5QlkDdknCNGshvp+wzm42Ys8GC5oDKAvMGho0T02CZQCEGHxrt9z5cDKgNICxodIFxwCJuBoFqz2/cq31CZHdKNdgI6nYIY+KGSumc0UvHBSetmP7NDutEE4IakSaLYM1sxEK6aldQ7yjKASlriBxSFnzlWLgqE2Gp2bxmU1jsILUY2XE4Qn6UCGE/MmL9OSispsjz2mm5MAii2vcCI+kqmvx/rv149J5klJbMGCsXvg7nBxuGe6fGdRJiEVIoLkfXFaH8X3TKjviaA2EWOtNQSqCo8UDg1WTgBYH26kyBl13ik8p10gkth9t+ykHEZjLPpfgzqGYv6ml3mSMuzApW0ftysiIJhAEqa2xyE2CFz1MuCRuVIzJ/0kF62z49SPX6VwaHMLuHtmGd0N8I185ZJ9axq3vgdAI0A3gjG4fGY/6sMlS3QhrbBdYW/VQPAxkwz7jU9iaYMqDAr2tTw3bRT+kWBsm80Wpn0sl2OL0avHq8jcPKRZsGE1ypwInUsmm7cBHDKQj3FQtk/1l353vZ+cyJO7mvBIR1EkSzaOSJcm1c4pgolBGbdxvMXiOvMSOBFNo1jhxYLS3Wjk4F2mQ9w0CwQoSER8T+y0kkDJYtL9fh5BufnXc0cMmOBaDqUK6C/4wsNNYKpF0BBjt0SCyr7J7oCn1J9XAMlizfq8W0q8W0wqnOA+qaoReWjXWXTOQP9M2DS9OEWgMMAPC7BZiFor9UT+L86lBqevKvWzBS0EfNppyfLUh1zY7Z/LjkDLYXUs+otideSQgcBrgFju/Up4o5ENHAx52PvciTYdGZkLcScf0HM+xRCFYNUMPrNmP9pzhejW5hc9PkbWS4UKbWrQE6N/AOCJAg0ya+FYgAAAABJRU5ErkJggg=="/>
                Phone
              </h5>
              <h1 className="card-text contactItems" ref={phoneRef}>0625092086</h1>
              <button className="dwnCV" onClick={() => handleCopy(phoneRef)}>Copy</button>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="p-1 col-12 col-md-6">
          <div className={`cards p-3 txt ${them === 'clear' ? ' text-dark' : "text-light"}`}>
            <div className="card-body">
              <h5 className="card-title">
                <img className='mx-2' src="data:image/png;base64,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"/>
            
                WhatsApp
              </h5>
              <h1 className="card-text contactItems" ref={whatsappRef}>0625092086</h1>
              <button className="dwnCV" onClick={() => handleCopy(whatsappRef)}>Copy</button>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="p-1 col-12">
          <div className={`cards p-3 txt ${them === 'clear' ? ' text-dark' : "text-light"}`}>
            <div className="card-body">
              <h5 className="card-title">
              <img className='mx-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAo1JREFUWEftlj9oE1Ecx7+/uxpFbM/k7iIOHbRJLNbq4ODiYhdxUqToojgpLoKDChYRFxHRQRwcxEHHiuCfycl2Eh0EMYloLqU6iV6S5tqAkjbvJ2dzIUlzXHJeoIHcdPd77/e+n/d97/3uEdbZQ+uMB30grxXpO9T7DpmjgwkIOk8CKggPNGPxvdesOmnPj0SGIVcOC4Y8sEKvw/PF7/X5DXvIHFH2k4Q3AIZqnQi31Yw1RYDoRLi5LwNSPq7cAnClbuwFwTQRNYofnVgDUC6uvANwYI0wYWZZVE5uz5ZMP1A/Ylv0DZI8DcahFvmzmmHV4s1AywAGXER/khDH1bmlt51AFRLhg4LFMwDbXPJ+a4a12c0h9hBbYeCqblh324Ey48olAuxlcpvkv2E0w6oZ0+yQF1CVg1+xFDqlf80ttQIzd2mDqCxPE+FIO+ABAAEMzMuydDTyZSFZL1oYDY9XKuIlATvagQnIoZrUHyJcUDPWIztiJpSzxLgPYFO7MEEDOUv4ZPWFznQC4vQNZMn8CLvl9D4QA7lqpY76dOYXABmA2iq/c4cYyZAkJsqQnrpUW3dOwkwI4kSZaRagscCAtKy1lwHKx5XLAG56FTsAdtW/phrWHQI4Fx9KBQcEpDTDGndmV/0JPwcw7GLNNxaY1OesD057V4FskcLOsCIk8RiEYw1QjBdiY+h0NG2W6uNdB6q5lVDOEeOe/c2Ei3rGetjKtUCBGPikG9Y+t52bj0XGgDKr2dJntz6BAqFpD/k5+n0gL9d8OrQ1DfDuFoM3HHsv8c42Nac1Y3GPk9NwQcvHlEkmvrGmgDGSdmH0A+JRh1Iguq5linZNW70v/I9IN3L7QF6u9h3qOYf+AmxyIDT/eR+fAAAAAElFTkSuQmCC"/>
                Email
              </h5>
              <h1 className="card-text contactItems" ref={emailRef}>sbitikhalid0@gmail.com</h1>
              <button className="dwnCV" onClick={() => handleCopy(emailRef)}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
