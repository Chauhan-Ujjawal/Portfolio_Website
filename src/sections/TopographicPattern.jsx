const TopographicPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 800"
    preserveAspectRatio="none"
  >
    {/* Base layers - widest, most gentle curves */}
    <path d="M -50 300 Q 150 250 350 320 Q 550 380 850 320 Q 1050 260 1150 300" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 350 Q 150 300 350 370 Q 550 430 850 370 Q 1050 310 1150 350" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 250 Q 150 200 350 270 Q 550 330 850 270 Q 1050 210 1150 250" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 400 Q 150 350 350 420 Q 550 480 850 420 Q 1050 360 1150 400" stroke="white" strokeWidth="0.5" fill="none" />
    
    {/* Middle layers - increasing frequency */}
    <path d="M -50 200 Q 100 180 250 200 Q 400 220 550 200 Q 700 180 850 200 Q 1000 220 1150 200" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 450 Q 100 430 250 450 Q 400 470 550 450 Q 700 430 850 450 Q 1000 470 1150 450" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 220 Q 120 195 250 215 Q 380 235 550 215 Q 720 195 850 215 Q 980 235 1150 215" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 430 Q 120 405 250 425 Q 380 445 550 425 Q 720 405 850 425 Q 980 445 1150 425" stroke="white" strokeWidth="0.5" fill="none" />
    
    {/* Higher frequency layers */}
    <path d="M -50 150 Q 80 135 210 150 Q 340 165 470 150 Q 600 135 730 150 Q 860 165 990 150 Q 1120 135 1150 150" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 500 Q 80 485 210 500 Q 340 515 470 500 Q 600 485 730 500 Q 860 515 990 500 Q 1120 485 1150 500" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 170 Q 70 155 200 165 Q 330 175 470 165 Q 610 155 730 165 Q 850 175 990 165 Q 1130 155 1150 170" stroke="white" strokeWidth="0.5" fill="none" />
    <path d="M -50 480 Q 70 465 200 475 Q 330 485 470 475 Q 610 465 730 475 Q 850 485 990 475 Q 1130 465 1150 480" stroke="white" strokeWidth="0.5" fill="none" />
    
    {/* Even higher frequency layers */}
    <path d="M -50 120 Q 50 110 150 115 Q 250 120 350 115 Q 450 110 550 115 Q 650 120 750 115 Q 850 110 950 115 Q 1050 120 1150 115" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 530 Q 50 520 150 525 Q 250 530 350 525 Q 450 520 550 525 Q 650 530 750 525 Q 850 520 950 525 Q 1050 530 1150 525" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 130 Q 40 120 150 125 Q 260 130 350 125 Q 440 120 550 125 Q 660 130 750 125 Q 840 120 950 125 Q 1060 130 1150 125" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 520 Q 40 510 150 515 Q 260 520 350 515 Q 440 510 550 515 Q 660 520 750 515 Q 840 510 950 515 Q 1060 520 1150 515" stroke="white" strokeWidth="0.4" fill="none" />
    
    {/* Additional layers for density */}
    <path d="M -50 100 Q 30 95 110 97 Q 190 99 270 97 Q 350 95 430 97 Q 510 99 590 97 Q 670 95 750 97 Q 830 99 910 97 Q 990 95 1070 97 Q 1150 99 1150 100" stroke="white" strokeWidth="0.3" fill="none" />
    <path d="M -50 550 Q 30 545 110 547 Q 190 549 270 547 Q 350 545 430 547 Q 510 549 590 547 Q 670 545 750 547 Q 830 549 910 547 Q 990 545 1070 547 Q 1150 549 1150 550" stroke="white" strokeWidth="0.3" fill="none" />
    <path d="M -50 90 Q 20 85 110 87 Q 200 89 270 87 Q 340 85 430 87 Q 520 89 590 87 Q 660 85 750 87 Q 840 89 910 87 Q 980 85 1070 87 Q 1160 89 1150 90" stroke="white" strokeWidth="0.3" fill="none" />
    <path d="M -50 560 Q 20 555 110 557 Q 200 559 270 557 Q 340 555 430 557 Q 520 559 590 557 Q 660 555 750 557 Q 840 559 910 557 Q 980 555 1070 557 Q 1160 559 1150 560" stroke="white" strokeWidth="0.3" fill="none" />
    
    {/* Very subtle high-frequency lines at the extremes */}
    <path d="M -50 70 Q 10 67 70 68 Q 130 69 190 68 Q 250 67 310 68 Q 370 69 430 68 Q 490 67 550 68 Q 610 69 670 68 Q 730 67 790 68 Q 850 69 910 68 Q 970 67 1030 68 Q 1090 69 1150 68" stroke="white" strokeWidth="0.2" fill="none" />
    <path d="M -50 580 Q 10 577 70 578 Q 130 579 190 578 Q 250 577 310 578 Q 370 579 430 578 Q 490 577 550 578 Q 610 579 670 578 Q 730 577 790 578 Q 850 579 910 578 Q 970 577 1030 578 Q 1090 579 1150 578" stroke="white" strokeWidth="0.2" fill="none" />
    <path d="M -50 65 Q 0 62 70 63 Q 140 64 190 63 Q 240 62 310 63 Q 380 64 430 63 Q 480 62 550 63 Q 620 64 670 63 Q 720 62 790 63 Q 860 64 910 63 Q 960 62 1030 63 Q 1100 64 1150 63" stroke="white" strokeWidth="0.2" fill="none" />
    <path d="M -50 585 Q 0 582 70 583 Q 140 584 190 583 Q 240 582 310 583 Q 380 584 430 583 Q 480 582 550 583 Q 620 584 670 583 Q 720 582 790 583 Q 860 584 910 583 Q 960 582 1030 583 Q 1100 584 1150 583" stroke="white" strokeWidth="0.2" fill="none" />
    
    {/* Additional layers to reach over 100 paths */}
    <path d="M -50 320 Q 100 300 250 315 Q 400 330 550 315 Q 700 300 850 315 Q 1000 330 1150 315" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 330 Q 90 310 250 325 Q 410 340 550 325 Q 690 310 850 325 Q 1010 340 1150 325" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 310 Q 110 290 250 305 Q 390 320 550 305 Q 690 290 850 305 Q 990 320 1150 305" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 340 Q 120 315 250 335 Q 380 355 550 335 Q 680 315 850 335 Q 980 355 1150 335" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 290 Q 130 265 250 290 Q 370 315 550 290 Q 670 265 850 290 Q 970 315 1150 290" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 360 Q 140 335 250 360 Q 360 385 550 360 Q 660 335 850 360 Q 960 385 1150 360" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 280 Q 150 250 250 280 Q 350 310 550 280 Q 650 250 850 280 Q 950 310 1150 280" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 370 Q 160 340 250 370 Q 340 400 550 370 Q 640 340 850 370 Q 940 400 1150 370" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 270 Q 170 235 250 270 Q 330 305 550 270 Q 630 235 850 270 Q 930 305 1150 270" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 380 Q 180 345 250 380 Q 320 415 550 380 Q 620 345 850 380 Q 920 415 1150 380" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 260 Q 190 220 250 260 Q 310 300 550 260 Q 610 220 850 260 Q 910 300 1150 260" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 390 Q 200 350 250 390 Q 300 430 550 390 Q 600 350 850 390 Q 900 430 1150 390" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 250 Q 210 205 250 250 Q 290 295 550 250 Q 590 205 850 250 Q 890 295 1150 250" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 400 Q 220 355 250 400 Q 280 445 550 400 Q 580 355 850 400 Q 880 445 1150 400" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 240 Q 230 190 250 240 Q 270 290 550 240 Q 570 190 850 240 Q 870 290 1150 240" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 410 Q 240 360 250 410 Q 260 460 550 410 Q 560 360 850 410 Q 860 460 1150 410" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 230 Q 250 175 250 230 Q 250 285 550 230 Q 550 175 850 230 Q 850 285 1150 230" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 420 Q 260 365 250 420 Q 240 475 550 420 Q 540 365 850 420 Q 840 475 1150 420" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 220 Q 270 160 250 220 Q 230 280 550 220 Q 530 160 850 220 Q 830 280 1150 220" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 430 Q 280 370 250 430 Q 220 490 550 430 Q 520 370 850 430 Q 820 490 1150 430" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 210 Q 290 145 250 210 Q 210 275 550 210 Q 510 145 850 210 Q 810 275 1150 210" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 440 Q 300 375 250 440 Q 200 505 550 440 Q 500 375 850 440 Q 800 505 1150 440" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 200 Q 310 130 250 200 Q 190 270 550 200 Q 490 130 850 200 Q 790 270 1150 200" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 450 Q 320 380 250 450 Q 180 520 550 450 Q 480 380 850 450 Q 780 520 1150 450" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 190 Q 330 115 250 190 Q 170 265 550 190 Q 470 115 850 190 Q 770 265 1150 190" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 460 Q 340 385 250 460 Q 160 535 550 460 Q 460 385 850 460 Q 760 535 1150 460" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 180 Q 350 100 250 180 Q 150 260 550 180 Q 450 100 850 180 Q 750 260 1150 180" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 470 Q 360 390 250 470 Q 140 550 550 470 Q 440 390 850 470 Q 740 550 1150 470" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 170 Q 370 85 250 170 Q 130 255 550 170 Q 430 85 850 170 Q 730 255 1150 170" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 480 Q 380 395 250 480 Q 120 565 550 480 Q 420 395 850 480 Q 720 565 1150 480" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 160 Q 390 70 250 160 Q 110 250 550 160 Q 410 70 850 160 Q 710 250 1150 160" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 490 Q 400 400 250 490 Q 100 580 550 490 Q 400 400 850 490 Q 700 580 1150 490" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 150 Q 410 55 250 150 Q 90 245 550 150 Q 390 55 850 150 Q 690 245 1150 150" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 500 Q 420 405 250 500 Q 80 595 550 500 Q 380 405 850 500 Q 680 595 1150 500" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 140 Q 430 40 250 140 Q 70 240 550 140 Q 370 40 850 140 Q 670 240 1150 140" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 510 Q 440 410 250 510 Q 60 610 550 510 Q 360 410 850 510 Q 660 610 1150 510" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 130 Q 450 25 250 130 Q 50 235 550 130 Q 350 25 850 130 Q 650 235 1150 130" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 520 Q 460 415 250 520 Q 40 625 550 520 Q 340 415 850 520 Q 640 625 1150 520" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 120 Q 470 10 250 120 Q 30 230 550 120 Q 330 10 850 120 Q 630 230 1150 120" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 530 Q 480 420 250 530 Q 20 640 550 530 Q 320 420 850 530 Q 620 640 1150 530" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 110 Q 490 -5 250 110 Q 10 225 550 110 Q 310 -5 850 110 Q 610 225 1150 110" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 540 Q 500 425 250 540 Q 0 655 550 540 Q 300 425 850 540 Q 600 655 1150 540" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 100 Q 510 -20 250 100 Q -10 220 550 100 Q 290 -20 850 100 Q 590 220 1150 100" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 550 Q 520 430 250 550 Q -20 670 550 550 Q 280 430 850 550 Q 580 670 1150 550" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 90 Q 530 -35 250 90 Q -30 215 550 90 Q 270 -35 850 90 Q 570 215 1150 90" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 560 Q 540 435 250 560 Q -40 685 550 560 Q 260 435 850 560 Q 560 685 1150 560" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 80 Q 550 -50 250 80 Q -50 210 550 80 Q 250 -50 850 80 Q 550 210 1150 80" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 570 Q 560 440 250 570 Q -60 700 550 570 Q 240 440 850 570 Q 540 700 1150 570" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 70 Q 570 -65 250 70 Q -70 205 550 70 Q 230 -65 850 70 Q 530 205 1150 70" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 580 Q 580 445 250 580 Q -80 715 550 580 Q 220 445 850 580 Q 520 715 1150 580" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 60 Q 590 -80 250 60 Q -90 200 550 60 Q 210 -80 850 60 Q 510 200 1150 60" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 590 Q 600 450 250 590 Q -100 730 550 590 Q 200 450 850 590 Q 500 730 1150 590" stroke="white" strokeWidth="0.4" fill="none" />
    
    <path d="M -50 50 Q 610 -95 250 50 Q -110 195 550 50 Q 190 -95 850 50 Q 490 195 1150 50" stroke="white" strokeWidth="0.4" fill="none" />
    <path d="M -50 600 Q 620 455 250 600 Q -120 745 550 600 Q 180 455 850 600 Q 480 745 1150 600" stroke="white" strokeWidth="0.4" fill="none" />
  </svg>
);

export default TopographicPattern;