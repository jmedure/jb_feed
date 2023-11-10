import { useState } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import Toast from './Toast';

export default function CopyLink(props) {
  const [isCopied, setIsCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const copylink = async () => {
    await navigator.clipboard.writeText(window.location.toString());
    setIsCopied(true);

    setToastVisible(true);

    setTimeout(() => {
      setIsCopied(false) && setToastVisible(false);
    }, 3000);
  };

  // const text = isCopied ? 'copied' : 'copy url';

  if (props.type === 'text') {
    return (
      <div className="group flex align-middle">
        {isCopied ? (
          <motion.button
            disabled={isCopied}
            onClick={copylink}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: 'linear', duration: 0.01 }}
            className="font-normal text-right md:w-full whitespace-nowrap md:hover:text-neutral-900 underline-offset-2 md:hover:underline-offset-4 transition-all"
          >
            URL copied!
          </motion.button>
        ) : (
          <motion.button
            disabled={isCopied}
            onClick={copylink}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: 'linear', duration: 0.01 }}
            className="font-normal md:w-full text-right underline whitespace-nowrap text-neutral-700 decoration-neutral-400 md:hover:text-neutral-900 md:hover:decoration-neutral-900 underline-offset-2 md:hover:underline-offset-4 transition-all"
          >
            {isCopied ? null : 'Copy URL'}
          </motion.button>
        )}
      </div>
    );
  } else {
    return (
      <div className="group flex align-middle ">
        {/* {isCopied ? null : <Tooltip text={'copy url'}></Tooltip>} */}
        {/* <Tooltip text={isCopied ? null : 'copy url'}> */}
        {/* <Tooltip text={'copy url'}> */}

        {isCopied && toastVisible ? (
          // <Tooltip text={'copy url'}>
          <Toast text={'URL copied!'}>
            <motion.button
              disabled={isCopied}
              onClick={copylink}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: 'linear', duration: 0.01 }}
              className="group fill-black/80 flex sm:hover:bg-white align-middle items-center p-2 w-9 max-h-9 max-w-9 rounded-full bg-white/80 transition-all duration-100 border border-black/10 hover:border-black/30 hover:drop-shadow gap-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className=" fill-inherit stroke-inherit"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.79693 14.1645L2 9.36757L2.96146 8.40614L6.79693 12.2416L15.0385 4L16 4.96144L6.79693 14.1645Z"
                    fill="black"
                  />
                </svg>
              </motion.div>
            </motion.button>
          </Toast>
        ) : (
          <Tooltip text={isCopied ? null : 'Copy URL'}>
            <motion.button
              disabled={isCopied}
              onClick={copylink}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: 'linear', duration: 0.01 }}
              className="group fill-black/50 flex sm:hover:bg-white align-middle items-center p-2 w-9 max-h-9 max-w-9 rounded-full bg-white/80 transition-all duration-100 border border-black/10 hover:border-black/30 hover:drop-shadow gap-2 select-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className=" fill-inherit stroke-inherit select-none"
              >
                <svg
                  className="stroke-black/50 stroke-[.5px] sm:group-hover:fill-black sm:group-hover:stroke-black"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5716 2.16401C12.5871 1.17943 11.1504 1.0198 10.3627 1.80746L9.06182 3.10838C8.99748 3.17272 8.90325 3.19917 8.81353 3.18398C8.57364 3.14338 8.44877 2.83006 8.62081 2.65802L9.91705 1.36178C10.9016 0.377207 12.6975 0.576746 13.9282 1.80746C15.1589 3.03818 15.3584 4.83403 14.3739 5.8186L12.2972 7.89523L10.8084 9.38406C10.605 9.58752 10.3668 9.74041 10.1062 9.84409C9.78239 9.97293 9.4238 10.0258 9.05378 10.0052C8.80592 9.9914 8.55292 9.94468 8.30181 9.86579C7.76965 9.69862 7.24592 9.38701 6.79728 8.93837C6.2736 8.41469 5.93662 7.78869 5.79813 7.16641C5.78137 7.0911 5.80629 7.01313 5.86084 6.95858C6.01412 6.8053 6.30387 6.92511 6.34864 7.13721C6.45558 7.64391 6.72729 8.15529 7.15382 8.58183C7.6238 9.05181 8.1968 9.33382 8.75305 9.41455C9.09194 9.46374 9.42462 9.43822 9.724 9.33497C9.96264 9.25267 10.1801 9.12098 10.3627 8.93837L11.7042 7.5969L12.3455 6.95563L13.9282 5.37292C14.7158 4.58526 14.5562 3.14858 13.5716 2.16401Z" />
                  <path d="M12.3516 7.03213C12.3498 7.00665 12.3478 6.98115 12.3455 6.95563M12.3455 6.95563L11.7042 7.5969M12.3455 6.95563L13.9282 5.37292C14.7158 4.58526 14.5562 3.14858 13.5716 2.16401C12.5871 1.17943 11.1504 1.0198 10.3627 1.80746L9.06182 3.10838C8.99748 3.17272 8.90325 3.19917 8.81353 3.18398C8.57364 3.14338 8.44877 2.83006 8.62081 2.65802L9.91705 1.36178C10.9016 0.377207 12.6975 0.576746 13.9282 1.80746C15.1589 3.03818 15.3584 4.83403 14.3739 5.8186L12.2972 7.89523L10.8084 9.38406C10.605 9.58752 10.3668 9.74041 10.1062 9.84409C9.78239 9.97293 9.4238 10.0258 9.05378 10.0052C8.80592 9.9914 8.55292 9.94468 8.30181 9.86579C7.76965 9.69862 7.24592 9.38701 6.79728 8.93837C6.2736 8.41469 5.93662 7.78869 5.79813 7.16641C5.78137 7.0911 5.80629 7.01313 5.86084 6.95858C6.01412 6.8053 6.30387 6.92511 6.34864 7.13721C6.45558 7.64391 6.72729 8.1553 7.15382 8.58183C7.6238 9.05181 8.1968 9.33382 8.75305 9.41455C9.09194 9.46374 9.42462 9.43822 9.724 9.33497C9.96264 9.25267 10.1801 9.12098 10.3627 8.93837L11.7042 7.5969M11.7042 7.5969L11.7036 7.60153" />
                  <path d="M2.42836 11.836C3.41293 12.8206 4.84961 12.9802 5.63727 12.1925L6.93818 10.8916C7.00252 10.8273 7.09675 10.8008 7.18647 10.816C7.42636 10.8566 7.55123 11.1699 7.37919 11.342L6.08295 12.6382C5.09838 13.6228 3.30253 13.4233 2.07181 12.1925C0.841095 10.9618 0.641558 9.16597 1.62613 8.1814L3.70276 6.10477L5.19159 4.61594C5.39505 4.41248 5.63316 4.25959 5.89376 4.15591C6.21761 4.02707 6.5762 3.97423 6.94622 3.99481C7.19408 4.0086 7.44708 4.05532 7.69819 4.13421C8.23035 4.30138 8.75409 4.61299 9.20272 5.06163C9.7264 5.58531 10.0634 6.21131 10.2019 6.83359C10.2186 6.9089 10.1937 6.98687 10.1392 7.04142C9.98589 7.1947 9.69613 7.07489 9.65136 6.86279C9.54442 6.35609 9.27271 5.84471 8.84618 5.41817C8.3762 4.94819 7.8032 4.66618 7.24695 4.58545C6.90806 4.53626 6.57538 4.56178 6.276 4.66503C6.03736 4.74733 5.81987 4.87902 5.63727 5.06163L4.2958 6.4031L3.65453 7.04436L2.07181 8.62708C1.28415 9.41474 1.44378 10.8514 2.42836 11.836Z" />
                  <path d="M3.64839 6.96787C3.65016 6.99335 3.6522 7.01885 3.65453 7.04436M3.65453 7.04436L4.2958 6.4031M3.65453 7.04436L2.07181 8.62708C1.28415 9.41474 1.44378 10.8514 2.42836 11.836C3.41293 12.8206 4.84961 12.9802 5.63727 12.1925L6.93818 10.8916C7.00252 10.8273 7.09675 10.8008 7.18647 10.816C7.42636 10.8566 7.55123 11.1699 7.37919 11.342L6.08295 12.6382C5.09838 13.6228 3.30253 13.4233 2.07181 12.1925C0.841095 10.9618 0.641558 9.16597 1.62613 8.1814L3.70276 6.10477L5.19159 4.61594C5.39505 4.41248 5.63316 4.25959 5.89376 4.15591C6.21761 4.02707 6.5762 3.97423 6.94622 3.99481C7.19408 4.0086 7.44708 4.05532 7.69819 4.13421C8.23035 4.30138 8.75409 4.61299 9.20272 5.06163C9.7264 5.58531 10.0634 6.21131 10.2019 6.83359C10.2186 6.9089 10.1937 6.98687 10.1392 7.04142C9.98589 7.1947 9.69613 7.07489 9.65136 6.86279C9.54442 6.35609 9.27271 5.8447 8.84618 5.41817C8.3762 4.94819 7.8032 4.66618 7.24695 4.58545C6.90806 4.53626 6.57538 4.56178 6.276 4.66503C6.03736 4.74733 5.81987 4.87902 5.63727 5.06163L4.2958 6.4031M4.2958 6.4031L4.29643 6.39847" />
                </svg>
              </motion.div>
            </motion.button>
          </Tooltip>
        )}
      </div>
    );
  }
}
