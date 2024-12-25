import React from "react";
import styles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import infoImage from "/public/assets/images/landingpageinfoimage.png";
import data from "@/data/data.json";
import Card from "@/components/Card/Card";
import logo from "/public/assets/images/TrueFlowLogoV2.png";
import location from "/public/assets/images/location.png";
import email from "/public/assets/images/email.png";
import phone from "/public/assets/images/phone.png";

export default function Home() {
  return (
    <React.Fragment>
      <main className={styles.container}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContentContainer}>
            <h2 className={styles.heroTitle}>Simplify. Connect. Create.</h2>
            <p className={styles.heroDescription}>
              Effortless technology that makes life easier, one interaction at a
              time.
            </p>

            <Link href={"#cta"} className={styles.btn}>
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoContentContainer}>
            <h3 className={styles.infoTitle}>Designed with You in Mind</h3>
            <p className={styles.infoDescription}>
              At True Flow Electronics, we understand the importance of
              simplicity and accessibility. That’s why our devices are crafted
              to be intuitive and easy to use, ensuring that you can stay
              creative and connected without frustration.
            </p>
          </div>
          <Image
            src={infoImage}
            alt={
              "Image of a woman looking at a laptop while holding a tech product"
            }
            className={styles.infoImg}
          />
        </div>

        <div className={styles.productContainer}>
          <div className={styles.products}>
            <div className={styles.productContentContainer}>
              <h3 className={styles.productsTitle}>Products</h3>
              <p className={styles.productDescription}>
                Explore our range of innovative devices, designed to bring
                creativity and connection into your hands. Whether at home or on
                the go, our products make technology simple, accessible, and
                enjoyable.
              </p>
              <button className={styles.btn}>View All Products</button>
            </div>
            {/* List Of Products in A grid */}
            {data.length > 0
              ? data.map(({ title, miniDescription, id, imageUrl }) => {
                  if (id < 6) {
                    return (
                      <React.Fragment key={id}>
                        <Card
                          title={title}
                          miniDescription={miniDescription}
                          imageUrl={imageUrl}
                        />
                      </React.Fragment>
                    );
                  }
                })
              : ""}
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <div className={styles.contentContainer}>
            <h3 className={styles.ctaTitle}>Discover Simplicity</h3>
            <h4 className={styles.ctaTitleSecondary}>
              Effortless Connectivity
            </h4>
          </div>

          <div className={styles.contentContainer}>
            <p className={styles.ctaDescription}>
              At True Flow Electronics, we understand the importance of
              simplicity and accessibility. That’s why our devices are crafted
              to be intuitive and easy to use, ensuring that you can stay
              creative and connected without frustration.
            </p>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Learn More
            </button>
          </div>
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <div className={styles.footerMainContainer}>
          <div className={styles.footerInfoContainer}>
            <Image
              src={logo}
              className={styles.imgLogo}
              alt={"The Company Logo"}
            />
            <p className={`${styles.footerInfoDescription} ${styles.spacing}`}>
              At True Flow Electronics, we’re dedicated to creating devices that
              make your life simpler. Explore our range of innovative products
              designed for effortless connectivity and creativity.
            </p>
            <button className={`${styles.btn} ${styles.spacing}`}>
              Learn More
            </button>
          </div>
          <div className={styles.footerContactContainer}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <div className={styles.underline}></div>
            <div className={styles.footerContactListContainer}>
              <div className={styles.footerIconContainer}>
                <Image
                  src={phone}
                  className={styles.imgIcon}
                  alt={"CellPhone Icon"}
                />
                <p className={styles.footerText}>+1 (555) 123-4567</p>
              </div>
              <div className={styles.footerIconContainer}>
                <Image
                  src={email}
                  className={styles.imgIcon}
                  alt={"Email Icon"}
                />
                <p className={styles.footerText}>
                  support@trueflowelectronics.com
                </p>
              </div>
              <div className={styles.footerIconContainer}>
                <Image
                  src={location}
                  className={styles.imgIcon}
                  alt={"Location Icon"}
                />
                <p className={styles.footerText}>
                  123 Tech Avenue, Innovation City
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} True Flow Electronics. All rights
            reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

// "Creating Connections, One Click at a Time"
// Empowering seniors to embrace the future with easy-to-use, innovative technology.
