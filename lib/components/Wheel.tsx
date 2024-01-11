import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

interface RotatingCanvasProps {
  $rotationAngle: number;
  width: number;
  height: number;
}

const Container = styled.div<RotatingCanvasProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  position: relative;
`;

const RotatingCanvas = styled.canvas.attrs<RotatingCanvasProps>((props) => ({
  style: {
    transform: `rotate(${props.$rotationAngle}deg)`,
    transformStyle: "preserve-3d",
    width: `${props.width}px`,
    height: `${props.height}px`,
  },
}))<RotatingCanvasProps>``;

const Pointer = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  margin-right: 9px;
  background-image: url(/arrow.png);
  background-size: cover;
`;

export interface WheelProps {
  innerRadius: number;
  outerRadius: number;
  innerColor: string;
  outerColor: string;
  innerBorderWidth: number;
  outerBorderWidth: number;
  dividerWidth: number;
  innerBorderColor: string;
  outerBorderColor: string;
  dividerColor: string;
  options: OptionProps[];
  stopIndex: number;
  onSpinEnd?: (index: number) => void;
  shouldSpin?: boolean;
  textColor?: string;
  textFontSize?: number;
  textDistanceFromCenter?: number;
  centerText?: string;
  centerImage?: string;
  showCenterTextOverImage?: boolean;
  centerTextFontSize?: number;
}

export interface OptionProps {
  color: string;
  text: string;
  image?: string;
  showTextOverImage?: boolean;
  textColor?: string;
  textFontSize?: number;
}

const Wheel = ({
  innerRadius,
  outerRadius,
  innerColor,
  innerBorderWidth,
  outerBorderWidth,
  dividerWidth,
  innerBorderColor,
  outerBorderColor,
  dividerColor,
  options,
  stopIndex,
  onSpinEnd,
  shouldSpin = false,
  textColor = "#fff",
  textFontSize = 20,
  textDistanceFromCenter,
  centerText,
  centerImage,
  showCenterTextOverImage = false,
  centerTextFontSize,
}: WheelProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const margin = 48;
  const canvasSize = outerRadius * 2 + outerBorderWidth * 2 + margin;

  const [rotationAngle, setRotationAngle] = useState(0);

  const startSpinning = () => {
    const start = Date.now();
    const rotations = 10; // number of rotations
    const duration = rotations * 1000; // duration of spin in ms

    const angle = 360 / options.length;
    const offset = Math.random() * angle;
    const stopAngle = rotations * 360 - angle * stopIndex - offset;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - start;

      if (elapsed < duration) {
        const t = elapsed / duration;
        const easedT = easeInOutCubic(t);
        const newRotationAngle = easedT * stopAngle;
        setRotationAngle(newRotationAngle);
        requestAnimationFrame(animate);
      } else {
        setRotationAngle(stopAngle);
        if (onSpinEnd) {
          onSpinEnd(stopIndex);
        }
      }
    };

    animate();
  };

  // Draw the wheel
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        drawOuterCircle(ctx, centerX, centerY);
        drawOptions(ctx, centerX, centerY);
      }
    }

    function drawOuterCircle(
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number
    ) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius + outerBorderWidth, 0, 2 * Math.PI);
      ctx.fillStyle = outerBorderColor;
      ctx.fill();
      ctx.restore();
    }

    function drawOptions(
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number
    ) {
      const angle = (2 * Math.PI) / options.length;

      // Create an array of image loading promises
      const imagePromises = options.map((option, i) => {
        return new Promise<void>((resolve, reject) => {
          if (option.image) {
            const image = new Image();
            image.src = option.image!;
            image.onload = () => {
              drawImage(i, image);
              if (option.showTextOverImage) {
                drawSectionText(i);
              }
              resolve();
            };
            image.onerror = reject;
          } else {
            drawSolidColorSection(i);
            drawSectionText(i);
            resolve();
          }
        });
      });

      // Draw dividers, inner circle, inner circle border after all images are loaded
      Promise.all(imagePromises).then(() => {
        for (let i = 0; i < options.length; i++) {
          drawDivider(i);
        }
        drawInnerCircleBorder();
        drawInnerCircle();
      });

      function drawSolidColorSection(i: number) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(
          centerX,
          centerY,
          outerRadius,
          angle * i,
          angle * (i + 1),
          false
        );
        ctx.fillStyle = options[i].color;
        ctx.fill();
        ctx.restore();
      }

      function drawSectionText(i: number) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle * (i + 0.5));
        ctx.textAlign = "center";
        ctx.fillStyle = options[i].textColor || textColor;
        ctx.font = `${options[i].textFontSize || textFontSize}px sans-serif`;
        const text = options[i].text;
        const metrics = ctx.measureText(text);
        const textWidth = metrics.width;
        const x =
          innerRadius +
          innerBorderWidth +
          textWidth / 2 +
          (textDistanceFromCenter ?? outerRadius / 3);
        ctx.fillText(text, x, 4);
        ctx.restore();
      }

      function drawImage(i: number, image: HTMLImageElement) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, outerRadius, angle * i, angle * (i + 1));
        ctx.closePath();
        ctx.clip();

        ctx.translate(
          centerX + Math.cos(angle * i + angle / 2) * outerRadius,
          centerY + Math.sin(angle * i + angle / 2) * outerRadius
        );

        ctx.drawImage(
          image,
          -image.width / 2,
          -image.height / 2,
          image.width,
          image.height
        );

        ctx.restore();
      }

      function drawDivider(i: number) {
        if (dividerWidth > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(
            centerX + Math.cos(angle * i) * outerRadius,
            centerY + Math.sin(angle * i) * outerRadius
          );
          ctx.strokeStyle = dividerColor;
          ctx.lineWidth = dividerWidth;
          ctx.stroke();
          ctx.restore();
        }
      }

      function drawInnerCircleBorder() {
        if (innerBorderWidth > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(
            centerX,
            centerY,
            innerRadius + innerBorderWidth,
            0,
            2 * Math.PI
          );
          ctx.fillStyle = innerBorderColor;
          ctx.fill();
          ctx.restore();
        }
      }

      function drawInnerCircle() {
        if (centerImage) {
          const image = new Image();
          image.src = centerImage;
          image.onload = () => {
            drawCenterImage(image);
            if (showCenterTextOverImage) {
              drawCenterText();
            }
          };
        } else {
          drawSolidCenterCircle();
          drawCenterText();
        }

        function drawCenterImage(image: HTMLImageElement) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(
            image,
            centerX - innerRadius,
            centerY - innerRadius,
            innerRadius * 2,
            innerRadius * 2
          );
          ctx.restore();
        }

        function drawSolidCenterCircle() {
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
          ctx.fillStyle = innerColor;
          ctx.fill();
          ctx.restore();
        }

        function drawCenterText() {
          if (centerText) {
            ctx.save();
            ctx.textAlign = "center";
            ctx.fillStyle = textColor;
            ctx.font = `${centerTextFontSize || textFontSize}px sans-serif`;
            ctx.fillText(centerText, centerX, centerY + 8);
            ctx.restore();
          }
        }
      }
    }
  }, []);

  // Spin the wheel
  useEffect(() => {
    if (shouldSpin) {
      startSpinning();
    }
  }, [shouldSpin]);

  return (
    <>
      <Container
        width={canvasSize}
        height={canvasSize}
        $rotationAngle={rotationAngle}
      >
        <RotatingCanvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          $rotationAngle={rotationAngle}
        />
        <Pointer />
      </Container>
    </>
  );
};

export default Wheel;
