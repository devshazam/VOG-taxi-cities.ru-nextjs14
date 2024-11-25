"use client";

import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Highlighter from "react-highlight-words";
import MainImage from '../public/banner/main-banner.webp';
import MainImageMd from '../public/banner/md.webp';
import MainImageXs from '../public/banner/xs.webp';
import { Suspense , lazy} from 'react';

export default function MainBackground() {
  const TransitionTextComp = lazy(() => import('./ui/TransitionTextComp'));
  return (
    <div className='banner'>
        <Container>
          <Row  className='banner__row'>
            <Col xs={12} md={6} className='banner__col'>
                <div className="banner__text-wrapper">
                  <Suspense fallback={<div>...</div>}>
                    <TransitionTextComp />
                  </Suspense>
                <br></br>
				<a href='tel:+79297837333' className='phone-ya' rel="nofollow">
					<Highlighter
					highlightClassName="banner__highlight"
					searchWords={["929", "783-73-33", "the"]}
					autoEscape={true}
					textToHighlight="Тел.: +7 (929) 783-73-33"

					className="banner__highlighter"
					/>
				</a>
                  <p className="banner__text">Наша компания работает с 2005 года и все это время мы изо всех сил стараемся угодить клиентским запросам на высшем уровне! <span className="banner__hidden-title">В нашей компании все клиенты будут удовлетворены!</span></p>
                </div>
            
            </Col>
            <Col xs={12} md={6}>
              {/* <Image alt="Такси межгород" src={MainImageXs}  style={{ width: '100%', height: 'auto'}} className="banner__img" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority/> */}
              <Image alt="Такси межгород" src={MainImageXs}  style={{ width: '100%', height: 'auto'}} className="banner__img-xs" priority/>
              <Image alt="Такси межгород" src={MainImageMd}  style={{ width: '100%', height: 'auto'}} className="banner__img-md" />
              <Image alt="Такси межгород" src={MainImage}  style={{ width: '100%', height: 'auto'}} className="banner__img" />
            </Col>

          </Row>
        </Container>
    </div>

  );
}
