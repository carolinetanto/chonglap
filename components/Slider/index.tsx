import React, { ReactNode }from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';

import Image from 'next/image';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

interface SliderProps {
  images: {
    sourceUrl: string;
  }[];
}

export class Slider extends React.Component<SliderProps> {
  /**
   * The main Splide component.
   */
  mainRef = React.createRef<Splide>();

  /**
   * The thumbnail Splide component.
   */
  thumbsRef = React.createRef<Splide>();

  /**
   * Set the sync target right after the component is mounted.
   */
  componentDidMount(): void {
    if ( this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide ) {
      this.mainRef.current.sync( this.thumbsRef.current.splide );
    }
  }

  /**
   * Render slides.
   *
   * @return Slide nodes.
   */
  renderSlides(): ReactNode[] {
    const { images } = this.props;
    return images.map((slide, index) => (
      <SplideSlide key={index}>
        <img src={slide.sourceUrl} alt={`Image ${index + 1}`} />
      </SplideSlide>
    ));
  }

  /**
   * Render the component.
   *
   * @return A React node.
   */
  render(): ReactNode {
    const mainOptions: Options = {
      type      : 'loop',
      perPage   : 1,
      perMove   : 1,
      gap         : '1rem',
      pagination: false,
      fixedHeight   : 396,
      fixedWidth    : 704,
      cover         : true,
      focus       : 'center',
      arrows    : false,
    };

    const thumbsOptions: Options = {
      type        : 'loop',
      // rewind      : true,
      gap         : '1rem',
      pagination  : false,
      fixedWidth  : 110,
      fixedHeight : 110,
      cover       : true,
      focus       : 'center',
      isNavigation: true,
      arrows    : false,
    };

    return (
      <div className="wrapper">
        <Splide
          options={ mainOptions }
          ref={ this.mainRef }
          aria-labelledby="thumbnail-slider-example"
        >
          { this.renderSlides() }
        </Splide>

        <Splide
          options={ thumbsOptions }
          ref={ this.thumbsRef }
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          { this.renderSlides() }
        </Splide>
      </div>
    );
  }
}