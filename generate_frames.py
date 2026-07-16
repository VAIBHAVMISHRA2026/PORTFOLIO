import os
import math
from PIL import Image, ImageEnhance

def generate_hologram_frames():
    input_path = "public/profile.jpg"
    output_dir = "public/frames"
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return
        
    os.makedirs(output_dir, exist_ok=True)
    
    # Load and resize profile image to 300x300 for optimal processing and speed
    src_img = Image.open(input_path).convert("RGB")
    src_img = src_img.resize((300, 300), Image.Resampling.LANCZOS)
    width, height = src_img.size
    
    num_frames = 60
    
    for f in range(num_frames):
        # Calculate angle of Y-rotation (oscillation from -20 to +20 degrees)
        angle = math.sin(f / num_frames * 2 * math.pi) * 0.35
        
        # Create output frame image
        frame = Image.new("RGB", (width, height), (8, 8, 10))
        pixels = frame.load()
        src_pixels = src_img.load()
        
        # Cylindrical 3D math projection
        for x in range(width):
            # Map x to cylindrical angle (-90 to +90 degrees)
            phi = (x / width - 0.5) * math.pi
            
            # Horizontal cylindrical mapping
            # Rotate coordinate about Y-axis
            rot_phi = phi - angle
            
            # If the rotated coordinate is out of bounds, skip
            if rot_phi < -math.pi / 2 or rot_phi > math.pi / 2:
                continue
                
            # Map back to source X coordinate
            src_x = int((rot_phi / math.pi + 0.5) * width)
            if src_x < 0 or src_x >= width:
                continue
                
            # 3D perspective foreshortening & height scaling based on angle
            scale_y = 1.0 - math.sin(phi) * math.sin(angle) * 0.15
            
            for y in range(height):
                # Calculate source Y with vertical scale centered at middle
                dy = y - height / 2
                src_y = int(height / 2 + dy / scale_y)
                
                if 0 <= src_y < height:
                    # Fetch pixel color from source
                    r, g, b = src_pixels[src_x, src_y]
                    
                    # Apply holographic color matrix (glowing cyan tint)
                    # Mix original colors with cyan glow
                    glow_intensity = 0.55
                    cyan_r = int(r * (1.0 - glow_intensity) + 0 * glow_intensity)
                    cyan_g = int(g * (1.0 - glow_intensity) + 180 * glow_intensity)
                    cyan_b = int(b * (1.0 - glow_intensity) + 255 * glow_intensity)
                    
                    # Scanline overlay effect (horizontal grid line)
                    scanline_freq = 6 # Scanline thickness/space
                    scanline_speed = 3 # Move speed
                    if (y + f * scanline_speed) % scanline_freq == 0:
                        # Darken pixel to make scanline gap
                        cyan_r = int(cyan_r * 0.5)
                        cyan_g = int(cyan_g * 0.5)
                        cyan_b = int(cyan_b * 0.5)
                        
                    # Chromatic Aberration: Shift red and blue channels on specific frames (glitch effect)
                    shift = int(math.sin(f / num_frames * 6 * math.pi) * 3)
                    if abs(shift) > 1 and 0 <= x + shift < width and 0 <= x - shift < width:
                        r_shift = src_pixels[x + shift, src_y][0]
                        b_shift = src_pixels[x - shift, src_y][2]
                        cyan_r = int(r_shift * 0.3 + cyan_r * 0.7)
                        cyan_b = int(b_shift * 0.3 + cyan_b * 0.7)
                        
                    pixels[x, y] = (
                        min(255, max(0, cyan_r)),
                        min(255, max(0, cyan_g)),
                        min(255, max(0, cyan_b))
                    )
                    
        # Apply extra brightness & contrast enhancement
        enhancer = ImageEnhance.Contrast(frame)
        frame = enhancer.enhance(1.4)
        
        # Save frame
        frame_name = f"frame_{f:03d}.jpg"
        frame.save(os.path.join(output_dir, frame_name), "JPEG", quality=85)
        
    print(f"Success: Generated {num_frames} frames inside {output_dir}.")

if __name__ == "__main__":
    generate_hologram_frames()
