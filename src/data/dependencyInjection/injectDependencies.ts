import DependencyInjection from './DependencyInjection'

export default function injectDependencies() {
	console.log('🔧 Injecting dependencies ...')

	const dependencyInjection = new DependencyInjection()
    
	return dependencyInjection.inject()
}