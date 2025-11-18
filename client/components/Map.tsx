export const Map = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Bangalore Location Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8926373358606!2d77.59460887345882!3d12.971598287347504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf00ef62e9eef560!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
      ></iframe>
    </div>
  );
};
