import { projects } from '../projects';
import '../styles/Page2.css';
import { isMobile } from 'react-device-detect';

const getVisitButton = (project) => {
  return (
    <div
      className={'projectButton'}
      onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
    >
      visit
    </div>
  );
};

const Page2 = ({ id }) => {
  return (
    <div className={'Page2'} id={id} style={{}}>
      <div className={'projectsContainer'}>
        {projects.map((e, i) => {
          return (
            <div
              key={i}
              className={'project'}
              style={{
                borderTop: `${i === 0 ? '1px' : '0px'} solid rgb(92, 81, 18)
                `,
              }}
              onMouseOver={() => {
                if (!isMobile) {
                  document.getElementById('projectTitle' + i).style.left =
                    '-100%';
                  document.getElementById('projectPreview' + i).style.left =
                    '0%';
                }
              }}
              onMouseOut={() => {
                if (!isMobile) {
                  document.getElementById('projectTitle' + i).style.left = '0';
                  document.getElementById('projectPreview' + i).style.left =
                    '100%';
                }
              }}
            >
              <div className={'projectTitle'} id={'projectTitle' + i}>
                <h1>{e.name}</h1>
                {isMobile ? (
                  getVisitButton(e)
                ) : (
                  <div className={'techChipContainer'}>
                    {e.tech.map((el, idx) => {
                      return (
                        <div key={idx} className={'techChip'}>
                          <p>{el}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className={'projectPreview'} id={'projectPreview' + i}>
                <div
                  className={'projectImage'}
                  style={{
                    backgroundImage: e.image,
                    backgroundPosition: 'right',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                {getVisitButton(e)}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className={'projectsButton'}>more</div> */}
    </div>
  );
};

export default Page2;
