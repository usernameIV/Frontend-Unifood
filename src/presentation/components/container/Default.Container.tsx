import { Button } from "../button/Button.component";
import { HiMiniPlus } from "react-icons/hi2";
import './Default.component.css';
import { CardText } from "../card/Card.component";
import { Banner } from "../banner/Banner.component";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { ItemForm } from "../form/Form";



export const ContainerItemsScreen = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div>
            <Banner />
            <div className="father">
                <div className="container_default">
                    <div className="wrapper-header">
                        <h3>Nossos itens!</h3> 
                        <Button 
                            text='Adicionar Item' 
                            icon={HiMiniPlus}
                            onClick={handleOpenModal}
                        />
                    </div>
                    <div className="rows">
                    <CardText 
                        name="Hamburguer" 
                        imageUrl="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg" 
                        cents=',90' 
                        value={24}
                    />
                    <CardText 
                        name="Sanduiche" 
                        imageUrl="https://assets.unileversolutions.com/recipes-v2/99439.jpg" 
                        cents=',90' 
                        value={19}
                    />
                    <CardText 
                        name="Coxinha" 
                        imageUrl="https://salgadosparavender.com.br/wp-content/uploads/2024/05/coxinha-para-vender.jpg" 
                        cents=',90' 
                        value={15}
                    />
                    <CardText 
                        name="CupCake" 
                        imageUrl="https://moinhoglobo.com.br/wp-content/uploads/2016/02/49-cupcake-rosa-scaled.jpg"
                        cents=',90' 
                        value={25}
                    />
                    <CardText 
                        name="Hamburguer" 
                        imageUrl="https://www.simplyrecipes.com/thmb/cMe-79ggQu91WIWwmbpPnyAmPVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Air-Fryer-Onion-Rings-LEAD-4-db00f8b94db848f9b502f7d24f06935f.jpg"
                        cents=',90' 
                        value={25}
                    />
                    <CardText 
                        name="Sanduiche de frango" 
                        imageUrl="https://assets.unileversolutions.com/recipes-v2/99439.jpg" 
                        cents=',90' 
                        value={19}
                    />
                    <CardText 
                        name="Emapada de camarão" 
                        imageUrl="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/24/796246837-empada-de-camarao.jpg" 
                        cents=',90' 
                        value={19}
                    />
                    
                    <CardText 
                        name="Aneis de cebola" 
                        imageUrl="https://www.simplyrecipes.com/thmb/cMe-79ggQu91WIWwmbpPnyAmPVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Air-Fryer-Onion-Rings-LEAD-4-db00f8b94db848f9b502f7d24f06935f.jpg"
                        cents=',90' 
                        value={25}
                    />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <ItemForm />
                </Modal>
            )}
        </div>
    );
};
