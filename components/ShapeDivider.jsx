import React from 'react';

/**
 * ShapeDivider - مكوّن للفواصل المموجة الرغوية (نسخة مبسطة ومنسجمة)
 */
const ShapeDivider = ({ type = 'wave', position = 'bottom', color = '#ffffff', height = '80px' }) => {
    const shapes = {
        // موجة بسيطة وصلبة
        wave: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '100%', width: '100%', fill: color }}>
                <path fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,202.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        ),
        // شكل الرغوة (تموج مع نفحات دائرية صلبة)
        foam: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '100%', width: '100%', fill: color }}>
                <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        ),
        // منحنى ناعم جداً (Curve)
        curve: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '100%', width: '100%', fill: color }}>
                <path fillOpacity="1" d="M0,288L1440,160L1440,320L0,320Z"></path>
            </svg>
        ),
        // موجة معكوسة للأعلى
        peak: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '100%', width: '100%', fill: color }}>
                <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        )
    };

    const isTop = position === 'top';
    const transform = isTop ? 'rotate(180deg)' : 'none';

    return (
        <div
            className="absolute left-0 w-full overflow-hidden leading-[0] z-[1] pointer-events-none"
            style={{
                height: height,
                [position]: '-1px',
                transform: transform
            }}
        >
            {shapes[type] || shapes.wave}
        </div>
    );
};

export default ShapeDivider;
