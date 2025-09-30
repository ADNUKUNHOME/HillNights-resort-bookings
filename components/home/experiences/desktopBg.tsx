import { MotionDiv } from '@/components/lib/motion'
import React from 'react'

const DesktopBg = ({ isNight }: { isNight: boolean }) => {
    return (
        < div className="absolute inset-0 -z-20" >
            <MotionDiv
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{
                    background: isNight
                        ? "linear-gradient(180deg, #082028 0%, #0b2340 50%, #071229 100%)"
                        : "linear-gradient(180deg, #eafaf8 0%, #c7e9ff 50%, #8fd3ff 100%)"
                }}
            />

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(${isNight ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                              linear-gradient(90deg, ${isNight ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>
        </div >
    )
}

export default DesktopBg
